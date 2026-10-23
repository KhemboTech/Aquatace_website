// JSON-LD builders. Consumed via the route `head()` `{ "script:ld+json": ... }` meta
// convention (TanStack Router serializes and escapes it into a
// <script type="application/ld+json"> tag automatically — see
// @tanstack/react-router's headContentUtils.js).
import type { BranchInfo } from "@/lib/business";
import { branches, business } from "@/lib/business";
import type { Product } from "@/lib/products";
import type { CountyPage, ServiceArea } from "./geo";
import { LOGO_MASTER_URL } from "@/assets/logo";
import { SITE_URL } from "./config";

// Placeholder social links in business.ts (bare homepages, no handle) aren't real
// profile pages — schema.org `sameAs` should only list ones that actually resolve
// to Aquatace's own profile.
const REAL_SOCIAL_LINKS = Object.values(business.social).filter(
  (url) => !/^https:\/\/(www\.)?(facebook|instagram|twitter|x)\.com\/?$/.test(url),
);

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

/** Parses the "Mon-Sun HH:MM-HH:MM" format used by every branch in business.ts today. */
function openingHoursSpec(openingHours: string) {
  const match = /(\d{2}:\d{2})-(\d{2}:\d{2})/.exec(openingHours);
  if (!match) return undefined;
  const [, opens, closes] = match;
  return {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: DAYS,
    opens,
    closes,
  };
}

export function branchUrl(slug: string) {
  return `${SITE_URL}/branches/${slug}`;
}

export function productUrl(slug: string) {
  return `${SITE_URL}/product/${slug}`;
}

/**
 * A real, physical Aquatace pickup point. `areaServed` lists nearby localities the
 * branch delivers to — it is a service-area signal, not a claim of a branch there.
 */
export function buildBranchSchema(branch: BranchInfo, nearbyAreas: string[]) {
  // Lets a name like "Ting'ang'a" also match searches/snippets for "Tinganga" —
  // schema.org's alternateName is the correct way to tell Google two spellings
  // are the same entity, rather than relying on page text alone.
  const plainName = branch.name.replace(/'/g, "");
  const hasApostrophe = plainName !== branch.name;
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": branchUrl(branch.slug),
    name: `Aquatace ${branch.name}`,
    ...(hasApostrophe ? { alternateName: `Aquatace ${plainName}` } : {}),
    url: branchUrl(branch.slug),
    telephone: branch.phoneHref.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.address,
      addressRegion: branch.county,
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: branch.latitude,
      longitude: branch.longitude,
    },
    openingHoursSpecification: openingHoursSpec(branch.openingHours),
    areaServed: nearbyAreas.map((name) => ({ "@type": "Place", name })),
    parentOrganization: { "@type": "Organization", name: business.name, url: SITE_URL },
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: business.name,
    url: SITE_URL,
    logo: `${SITE_URL}${LOGO_MASTER_URL}`,
    telephone: business.phoneHref.replace("tel:", ""),
    ...(REAL_SOCIAL_LINKS.length > 0 ? { sameAs: REAL_SOCIAL_LINKS } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: business.phoneHref.replace("tel:", ""),
      contactType: "customer service",
      areaServed: "KE",
    },
    // Sourced from the Aquatace Google Business Profile, not our own DB — see
    // business.googleRating.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.googleRating.value.toFixed(1),
      reviewCount: business.googleRating.count,
    },
  };
}

export function buildProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": productUrl(product.slug),
    name: product.name,
    description: product.description,
    brand: { "@type": "Brand", name: product.brand },
    ...(product.image
      ? { image: product.image.startsWith("/") ? `${SITE_URL}${product.image}` : product.image }
      : {}),
    offers: {
      "@type": "Offer",
      url: productUrl(product.slug),
      priceCurrency: "KES",
      price: product.price,
      availability: product.active ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: business.name },
    },
  };
}

/**
 * "Near me" and proximity searches ("gas near Kamakis") are matched by Google against
 * structured geo/areaServed data, not page text — plain prose doesn't help there. Every
 * service-area and county page gets this Service schema so each named locality is
 * machine-readable as somewhere Aquatace actually serves, anchored to its nearest
 * branch's real coordinates.
 */
export function buildServiceAreaSchema(area: ServiceArea) {
  const nearest = area.nearestBranchSlugs
    .map((slug) => branches.find((b) => b.slug === slug))
    .filter((b): b is BranchInfo => Boolean(b));
  const primary = nearest[0];
  const areaUrl = `${SITE_URL}/service-areas/${area.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${areaUrl}#service`,
    name: `Water Refill, Gas Supply & Electronics Delivery in ${area.name}`,
    serviceType: "Water, gas and electronics delivery",
    url: areaUrl,
    provider: { "@type": "Organization", "@id": `${SITE_URL}#organization`, name: business.name },
    areaServed: [area.name, ...area.nearbyPlaces, ...(area.corridorStops ?? [])].map((name) => ({
      "@type": "Place",
      name,
    })),
    ...(primary
      ? {
          availableAtOrFrom: {
            "@type": "Place",
            name: `Aquatace ${primary.name}`,
            geo: {
              "@type": "GeoCoordinates",
              latitude: primary.latitude,
              longitude: primary.longitude,
            },
          },
        }
      : {}),
  };
}

export function buildCountySchema(county: CountyPage) {
  const countyBranches = county.branchSlugs
    .map((slug) => branches.find((b) => b.slug === slug))
    .filter((b): b is BranchInfo => Boolean(b));
  const countyUrl = `${SITE_URL}/locations/${county.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${countyUrl}#service`,
    name: `Water Refill, Gas Supply & Electronics Delivery in ${county.name} County`,
    serviceType: "Water, gas and electronics delivery",
    url: countyUrl,
    provider: { "@type": "Organization", "@id": `${SITE_URL}#organization`, name: business.name },
    areaServed: [`${county.name} County`, ...county.otherPlaces].map((name) => ({
      "@type": "Place",
      name,
    })),
    availableAtOrFrom: countyBranches.map((b) => ({
      "@type": "Place",
      name: `Aquatace ${b.name}`,
      geo: { "@type": "GeoCoordinates", latitude: b.latitude, longitude: b.longitude },
    })),
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
