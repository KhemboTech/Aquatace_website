// Local-SEO content data: real service areas and counties around Aquatace's four
// physical branches (see `branches` in @/lib/business). This is presentation/content
// data only — it never feeds order routing or delivery-fee logic, which continues to
// live in orders.functions.ts against the `branches` table.
//
// Every area listed here is a place Aquatace genuinely delivers to or near. Areas the
// business hasn't confirmed coverage for are deliberately left out rather than guessed.
//
// Titles/descriptions deliberately repeat the "water refill in X" / "gas refill in X" /
// "gas supply in X" phrasing on every page — those are the literal phrases customers type
// into Google, and each page needs to match them for its own area, not just the homepage.

export type CountySlug = "nairobi" | "kiambu" | "muranga";

export interface BranchLocalContent {
  /** Areas immediately around the branch, beyond the short `serves` line in business.ts. */
  nearbyAreas: string[];
  /** One extra sentence of area-specific colour for the branch page, in addition to `blurb`. */
  areaNote: string;
  seoTitle: string;
  seoDescription: string;
}

/** Keyed by branch slug (business.ts `branches[].slug`). */
export const branchLocalContent: Record<string, BranchLocalContent> = {
  marurui: {
    nearbyAreas: [
      "Kasarani",
      "Thome",
      "Ridgeways",
      "Mirema",
      "Garden Estate",
      "Garden City",
      "Roysambu",
      "Zimmerman",
      "Githurai",
      "Mwiki",
      "Kahawa",
      "Kamiti Corner",
      "Ruaka",
      "Two Rivers",
    ],
    areaNote:
      "Marurui sits inside Kasarani, so this branch is usually the fastest for water and gas orders anywhere along the Kasarani side of Thika Road, including Roysambu and Kamiti Corner.",
    seoTitle: "Aquatace Marurui — Water Refill & Gas Supply in Kasarani, Roysambu",
    seoDescription:
      "Need water refill, gas refill or gas supply in Marurui, Kasarani or Roysambu? Order purified drinking water and LPG cooking gas refills from Aquatace's Marurui branch, serving Kasarani, Thome, Ridgeways, Roysambu, Zimmerman and Kamiti Corner. Call or WhatsApp 0795 199 701.",
  },
  kihunguro: {
    nearbyAreas: [
      "Ruiru",
      "Ruiru Town",
      "Githurai",
      "Kimbo",
      "Kahawa Sukari",
      "Kahawa Wendani",
      "Kamakis",
      "Kamiti Corner",
      "Juja",
      "Thika Road",
      "Kenyatta University",
      "Kasarani",
    ],
    areaNote:
      "Kihunguro sits right on the Thika Road/Ruiru corridor, putting most of Ruiru town and the Kahawa Sukari/Kahawa Wendani estates, plus Kamakis and Kamiti Corner, within easy reach.",
    seoTitle: "Aquatace Kihunguro — Water Refill & Gas Supply in Ruiru, Kamakis",
    seoDescription:
      "Need water refill, gas refill or gas supply in Ruiru or Kamakis? Aquatace's Kihunguro branch delivers water refills and LPG cooking gas across Ruiru, Kahawa Sukari, Kahawa Wendani, Kamakis and Kamiti Corner. Call or WhatsApp 0713 727 229.",
  },
  membley: {
    nearbyAreas: [
      "Ruiru",
      "Ruiru Town",
      "Kihunguro",
      "Kimbo",
      "Gitambaya",
      "Githurai",
      "Kahawa Sukari",
      "Kahawa Wendani",
      "Kenyatta University",
      "Tatu City",
      "Eastern Bypass",
      "Kamakis",
      "Juja",
      "OJ",
      "Kahawa West",
    ],
    areaNote:
      "Membley's position near Thika Road, Kenyatta University, Kamakis, OJ and Tatu City makes it our main coordination point for orders further out along this corridor — including nationwide dispatch outside our core Nairobi/Kiambu coverage.",
    seoTitle: "Aquatace Membley — Water Refill & Gas Supply Near OJ, Tatu City",
    seoDescription:
      "Need water refill, gas refill or gas supply in Membley, OJ or Tatu City? Order water and LPG gas refills for delivery in Membley, OJ, Kahawa West, Tatu City and nearby Kenyatta University from Aquatace. Call or WhatsApp 0707 201 072.",
  },
  tinganga: {
    nearbyAreas: [
      "Kiambu",
      "Kiambu Town",
      "Ndumberi",
      "Riabai",
      "Kiambaa",
      "Thindigua",
      "Githunguri",
      "Ruaka",
      "Karuri",
      "Muchatha",
    ],
    areaNote:
      "Ting'ang'a reaches Kiambu town and its immediate neighbourhoods — Ndumberi, Riabai, Kiambaa, Thindigua, Ruaka, Karuri and Muchatha.",
    seoTitle: "Aquatace Ting'ang'a — Water Refill & Gas Supply in Kiambu",
    seoDescription:
      "Need water refill, gas refill or gas supply in Kiambu? Aquatace's Ting'ang'a shop serves Kiambu town, Ndumberi, Riabai and Kiambaa with water refills and LPG cooking gas. Call or WhatsApp 0112 819 068.",
  },
};

export interface ServiceArea {
  slug: string;
  name: string;
  /** Nairobi/Kiambu, or omitted for corridor pages that span both. */
  county?: CountySlug;
  /** Branch slugs most relevant to this area, in priority order. */
  nearestBranchSlugs: string[];
  /** Real neighbouring places mentioned in the copy — not separate pages. */
  nearbyPlaces: string[];
  /** Set only for corridor pages (Thika Road, Northern Bypass). */
  corridorStops?: string[];
  intro: string;
  seoTitle: string;
  seoDescription: string;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "kasarani",
    name: "Kasarani",
    county: "nairobi",
    nearestBranchSlugs: ["marurui"],
    nearbyPlaces: [
      "Thome",
      "Ridgeways",
      "Mirema",
      "Garden Estate",
      "Roysambu",
      "Zimmerman",
      "Mwiki",
      "Kahawa",
      "Kamiti Corner",
    ],
    intro:
      "Aquatace's Marurui branch sits inside Kasarani, so water refill and cooking gas orders from anywhere in Kasarani constituency — Kasarani, Roysambu, Thome, Ridgeways, Mirema, Garden Estate, Zimmerman and Mwiki — are usually among the fastest we dispatch. Electronics and the rest of our online catalogue deliver here too, on the same WhatsApp order process as everywhere else we serve.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Kasarani, Marurui | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Marurui or Kasarani? Order purified drinking water and LPG cooking gas for delivery in Kasarani, Thome, Ridgeways, Roysambu and Kamiti Corner from Aquatace's Marurui branch. Order via WhatsApp.",
  },
  {
    slug: "roysambu",
    name: "Roysambu",
    county: "nairobi",
    nearestBranchSlugs: ["marurui"],
    nearbyPlaces: ["Zimmerman", "Githurai", "Kasarani", "Thome", "Garden City", "Safari Park"],
    intro:
      "Roysambu, in Kasarani constituency, is a short dispatch from Aquatace's Marurui branch. Water refill, bottled water and 6kg/13kg cooking gas orders from Roysambu, Zimmerman and the Garden City/Safari Park side deliver quickly — order on WhatsApp and we'll confirm your delivery window.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Roysambu | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Roysambu? Aquatace's Marurui branch delivers purified drinking water and LPG cooking gas to Roysambu, Zimmerman, Garden City and Safari Park in Kasarani constituency. Order via WhatsApp.",
  },
  {
    slug: "ruiru",
    name: "Ruiru",
    county: "kiambu",
    nearestBranchSlugs: ["kihunguro", "membley"],
    nearbyPlaces: [
      "Kimbo",
      "Githurai",
      "Gitambaya",
      "Kahawa Sukari",
      "Kahawa Wendani",
      "Kamakis",
      "Varsityville",
      "Mwihoko",
      "Tatu City",
      "Juja",
      "Mugutha",
      "Biashara",
      "Murera",
      "Gitothua",
      "Gatongora",
      "Toll Station",
    ],
    intro:
      "Ruiru is home to two Aquatace branches — Kihunguro on the Thika Road side and Membley Estate nearby — so most of Ruiru town and its estates (Kimbo, Kahawa Sukari, Kahawa Wendani, Kamakis, Gitambaya, Varsityville, Mwihoko, Mugutha, Biashara, Murera, Gitothua and Gatongora) fall within easy reach of at least one of them. Whichever branch is closer handles dispatch; water refills, bottled water, 6kg/13kg gas and our online electronics catalogue can all be ordered on WhatsApp.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Ruiru | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Ruiru? Aquatace's Kihunguro and Membley branches deliver purified water and LPG cooking gas across Ruiru town, Kimbo, Kahawa Sukari and Kamakis. Order via WhatsApp.",
  },
  {
    slug: "kamakis",
    name: "Kamakis",
    county: "kiambu",
    nearestBranchSlugs: ["kihunguro", "membley"],
    nearbyPlaces: ["Ruiru", "Membley", "Tatu City", "Juja", "Kenyatta University"],
    intro:
      "Kamakis sits on the Thika Road corridor between Aquatace's Kihunguro and Membley branches, so water refill and cooking gas orders here dispatch from whichever is closer. Order on WhatsApp and we'll confirm delivery timing.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Kamakis, Ruiru | Aquatace",
    seoDescription:
      "Looking for water refill, gas refill or gas supply in Kamakis? Aquatace's Kihunguro and Membley branches deliver purified water and LPG cooking gas to Kamakis and the surrounding Thika Road/Ruiru corridor. Order via WhatsApp.",
  },
  {
    slug: "oj",
    name: "OJ",
    county: "kiambu",
    nearestBranchSlugs: ["membley"],
    nearbyPlaces: ["Membley", "Kahawa West", "Ruiru", "Tatu City"],
    intro:
      "OJ, right next to Aquatace's Membley branch, gets fast water refill and cooking gas delivery. Order your 20L refill, bottled water or 6kg/13kg gas on WhatsApp and we'll confirm your delivery window.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in OJ, Ruiru | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in OJ? Aquatace's Membley branch delivers purified drinking water and LPG cooking gas (6kg & 13kg) to OJ, Kahawa West and nearby Ruiru estates. Order via WhatsApp.",
  },
  {
    slug: "kamiti-corner",
    name: "Kamiti Corner",
    county: "kiambu",
    nearestBranchSlugs: ["marurui", "kihunguro"],
    nearbyPlaces: ["Kahawa", "Githurai", "Roysambu", "Ruiru", "Kasarani"],
    intro:
      "Kamiti Corner sits between Aquatace's Marurui and Kihunguro branches, on the Nairobi/Kiambu boundary. Water refill and cooking gas orders here dispatch from whichever branch is closer — order on WhatsApp and we'll confirm.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Kamiti Corner | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply near Kamiti Corner? Aquatace's Marurui and Kihunguro branches deliver purified water and LPG cooking gas to Kamiti Corner, Kahawa and Githurai. Order via WhatsApp.",
  },
  {
    slug: "ruaka",
    name: "Ruaka",
    county: "kiambu",
    nearestBranchSlugs: ["tinganga", "marurui"],
    nearbyPlaces: ["Karuri", "Muchatha", "Banana", "Kihara", "Ndenderu", "Two Rivers"],
    intro:
      "Ruaka, on the Kiambu side of the Northern Bypass/Limuru Road junction, is served by Aquatace's Ting'ang'a and Marurui branches. Water refill, bottled water and 6kg/13kg cooking gas orders from Ruaka, Karuri, Muchatha, Banana and Kihara dispatch on WhatsApp.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Ruaka | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Ruaka? Aquatace delivers purified water and LPG cooking gas to Ruaka, Karuri, Muchatha, Banana and Kihara from our Ting'ang'a and Marurui branches. Order via WhatsApp.",
  },
  {
    slug: "githurai",
    name: "Githurai",
    county: "nairobi",
    nearestBranchSlugs: ["marurui", "kihunguro", "membley"],
    nearbyPlaces: ["Kahawa", "Roysambu", "Zimmerman", "Kimbo", "Mwiki", "Kamiti Corner"],
    intro:
      "Githurai straddles the Nairobi/Kiambu boundary along Thika Road, so orders here are dispatched from whichever branch is closer — our Marurui branch on the Kasarani side, or Kihunguro and Membley on the Ruiru side. All three stock water refills and cooking gas, and our full catalogue, including electronics, ships here as well.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Githurai | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Githurai? Order water, bottled water and cooking gas for delivery on the Nairobi–Kiambu border. Served by Aquatace's Marurui, Kihunguro and Membley branches.",
  },
  {
    slug: "kimbo",
    name: "Kimbo",
    county: "kiambu",
    nearestBranchSlugs: ["kihunguro", "membley"],
    nearbyPlaces: ["Ruiru", "Githurai", "Kahawa Wendani", "Membley", "Kihunguro"],
    intro:
      "Kimbo, on the Ruiru side of Thika Road, sits between our Kihunguro and Membley branches. Order water refills, bottled water or 6kg/13kg cooking gas on WhatsApp and we'll dispatch from whichever branch is closer to your exact location.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Kimbo, Ruiru | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Kimbo? Aquatace's Kihunguro and Membley branches deliver purified water and LPG cooking gas to Kimbo, Ruiru. Order on WhatsApp.",
  },
  {
    slug: "tatu-city",
    name: "Tatu City",
    county: "kiambu",
    nearestBranchSlugs: ["membley"],
    nearbyPlaces: ["Kenyatta University", "Kamakis", "Ruiru", "Juja", "OJ"],
    intro:
      "Aquatace doesn't have a physical branch inside Tatu City, but our Membley branch — a short distance away on the Ruiru/Kamakis side of Thika Road — delivers water, LPG cooking gas and electronics to residents and businesses there. Order on WhatsApp and we'll confirm delivery timing before dispatch.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Tatu City | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Tatu City? Order purified water, cooking gas and electronics for delivery from Aquatace's nearby Membley branch. Delivery only — order via WhatsApp.",
  },
  {
    slug: "juja",
    name: "Juja",
    county: "kiambu",
    nearestBranchSlugs: ["kihunguro", "membley"],
    nearbyPlaces: [
      "Thika Road",
      "Ruiru",
      "Kenyatta University",
      "Kamakis",
      "Witeithie",
      "Kalimoni",
      "Juja Farm",
    ],
    intro:
      "Juja is further out along Thika Road from our Kihunguro and Membley branches, which coordinate delivery of water refills, cooking gas and electronics to Juja town, Witeithie, Kalimoni and Juja Farm. Share your exact location on WhatsApp when ordering so we can give you an accurate delivery time.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Juja | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Juja? Aquatace delivers purified water, LPG cooking gas and electronics to Juja from our Kihunguro and Membley branches along Thika Road. Order via WhatsApp.",
  },
  {
    slug: "kabete",
    name: "Kabete",
    county: "kiambu",
    nearestBranchSlugs: ["membley"],
    nearbyPlaces: ["Uthiru", "Lower Kabete", "Kinoo"],
    intro:
      "Aquatace doesn't have a physical branch in Kabete, but our Membley hub coordinates delivery of water refills, bottled water and cooking gas there — the same way we handle orders outside our core Thika Road coverage. Order on WhatsApp and we'll confirm delivery timing and any extra courier cost before dispatch.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Kabete | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Kabete? Aquatace delivers purified water and LPG cooking gas to Kabete, coordinated through our Membley hub. Order via WhatsApp — we'll confirm delivery timing and cost first.",
  },
  {
    slug: "kikuyu",
    name: "Kikuyu",
    county: "kiambu",
    nearestBranchSlugs: ["membley"],
    nearbyPlaces: ["Kinoo", "Thogoto", "Sigona"],
    intro:
      "Aquatace doesn't have a physical branch in Kikuyu, but our Membley hub coordinates delivery of water refills, bottled water and cooking gas there, the same way we handle orders outside our core Thika Road coverage. Order on WhatsApp and we'll confirm delivery timing and any extra courier cost before dispatch.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Kikuyu | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Kikuyu? Aquatace delivers purified water and LPG cooking gas to Kikuyu, coordinated through our Membley hub. Order via WhatsApp — we'll confirm delivery timing and cost first.",
  },
  {
    slug: "limuru",
    name: "Limuru",
    county: "kiambu",
    nearestBranchSlugs: ["membley"],
    nearbyPlaces: ["Tigoni", "Ndeiya", "Bibirioni"],
    intro:
      "Aquatace doesn't have a physical branch in Limuru, but our Membley hub coordinates delivery of water refills, bottled water and cooking gas there, the same way we handle orders outside our core Thika Road coverage. Order on WhatsApp and we'll confirm delivery timing and any extra courier cost before dispatch.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Limuru | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Limuru? Aquatace delivers purified water and LPG cooking gas to Limuru, coordinated through our Membley hub. Order via WhatsApp — we'll confirm delivery timing and cost first.",
  },
  {
    slug: "lari",
    name: "Lari",
    county: "kiambu",
    nearestBranchSlugs: ["membley"],
    nearbyPlaces: ["Kimende", "Nyanduma"],
    intro:
      "Aquatace doesn't have a physical branch in Lari, but our Membley hub coordinates delivery of water refills, bottled water and cooking gas there, the same way we handle orders outside our core Thika Road coverage. Order on WhatsApp and we'll confirm delivery timing and any extra courier cost before dispatch.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Lari | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Lari? Aquatace delivers purified water and LPG cooking gas to Lari, coordinated through our Membley hub. Order via WhatsApp — we'll confirm delivery timing and cost first.",
  },
  {
    slug: "gatundu-north",
    name: "Gatundu North",
    county: "kiambu",
    nearestBranchSlugs: ["membley"],
    nearbyPlaces: ["Gituamba", "Chania"],
    intro:
      "Aquatace doesn't have a physical branch in Gatundu North, but our Membley hub coordinates delivery of water refills, bottled water and cooking gas there, the same way we handle orders outside our core Thika Road coverage. Order on WhatsApp and we'll confirm delivery timing and any extra courier cost before dispatch.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Gatundu North | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Gatundu North? Aquatace delivers purified water and LPG cooking gas to Gatundu North, coordinated through our Membley hub. Order via WhatsApp — we'll confirm delivery timing and cost first.",
  },
  {
    slug: "gatundu-south",
    name: "Gatundu South",
    county: "kiambu",
    nearestBranchSlugs: ["membley"],
    nearbyPlaces: ["Kiamwangi", "Ndarugu"],
    intro:
      "Aquatace doesn't have a physical branch in Gatundu South, but our Membley hub coordinates delivery of water refills, bottled water and cooking gas there, the same way we handle orders outside our core Thika Road coverage. Order on WhatsApp and we'll confirm delivery timing and any extra courier cost before dispatch.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Gatundu South | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Gatundu South? Aquatace delivers purified water and LPG cooking gas to Gatundu South, coordinated through our Membley hub. Order via WhatsApp — we'll confirm delivery timing and cost first.",
  },
  {
    slug: "thika-town",
    name: "Thika Town",
    county: "kiambu",
    nearestBranchSlugs: ["kihunguro", "membley"],
    nearbyPlaces: ["Makongeni", "Landless", "Section 9", "Majengo", "Juja"],
    intro:
      "Thika Town, at the far end of our Thika Road corridor, is coordinated through Aquatace's Kihunguro and Membley branches. Water refill, bottled water and 6kg/13kg cooking gas orders to Thika, Makongeni, Landless, Section 9 and Majengo are dispatched on WhatsApp — we'll confirm timing before delivery.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Thika Town | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Thika Town? Aquatace's Kihunguro and Membley branches deliver purified water and LPG cooking gas to Thika, Makongeni, Landless and Section 9. Order via WhatsApp.",
  },
  {
    slug: "thika-road",
    name: "Thika Road",
    nearestBranchSlugs: ["marurui", "kihunguro", "membley"],
    nearbyPlaces: [],
    corridorStops: [
      "Marurui",
      "Kasarani",
      "Githurai",
      "Kahawa",
      "Ruiru",
      "Kamakis",
      "Kihunguro",
      "Membley",
      "OJ",
      "Kimbo",
      "Juja",
      "Thika",
    ],
    intro:
      "Thika Road is Aquatace's core delivery corridor. From Marurui through Kasarani, Githurai, Kahawa, Ruiru, Kamakis, Kihunguro, Membley, OJ and Kimbo, on towards Juja and Thika, our three branches along this route keep water refill and cooking gas delivery times short for the whole stretch. Electronics and the rest of our catalogue order the same way, on WhatsApp.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply Along Thika Road | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply along Thika Road? Aquatace delivers purified water, cooking gas and electronics across Marurui, Kasarani, Githurai, Ruiru, Kamakis, Kihunguro, Membley, OJ, Kimbo and Juja. Order via WhatsApp.",
  },
  {
    slug: "northern-bypass",
    name: "Northern Bypass",
    nearestBranchSlugs: ["marurui", "kihunguro", "membley"],
    nearbyPlaces: [],
    corridorStops: [
      "Ruaka",
      "Kamiti Corner",
      "Kasarani",
      "Roysambu",
      "Githurai",
      "Kahawa",
      "Ruiru",
    ],
    intro:
      "The Northern Bypass links Ruaka through Kamiti Corner, Kasarani, Roysambu, Githurai and Kahawa into Ruiru — all within reach of Aquatace's Marurui and Kihunguro branches. Water refill and cooking gas orders anywhere along this stretch dispatch from whichever branch is closer, on the same WhatsApp order process as everywhere else we serve.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply Along Northern Bypass | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply along the Northern Bypass? Aquatace delivers purified water and LPG cooking gas across Ruaka, Kamiti Corner, Kasarani, Roysambu, Githurai, Kahawa and Ruiru. Order via WhatsApp.",
  },
];

export function getServiceArea(slug: string): ServiceArea | undefined {
  return serviceAreas.find((s) => s.slug === slug);
}

export interface CountyPage {
  slug: CountySlug;
  name: string;
  branchSlugs: string[];
  serviceAreaSlugs: string[];
  otherPlaces: string[];
  hasPhysicalBranch: boolean;
  intro: string;
  seoTitle: string;
  seoDescription: string;
}

export const counties: CountyPage[] = [
  {
    slug: "nairobi",
    name: "Nairobi",
    branchSlugs: ["marurui"],
    serviceAreaSlugs: [
      "kasarani",
      "roysambu",
      "githurai",
      "kamiti-corner",
      "thika-road",
      "northern-bypass",
    ],
    otherPlaces: [
      "Thome",
      "Ridgeways",
      "Mirema",
      "Garden Estate",
      "Roysambu",
      "Zimmerman",
      "Mwiki",
      "Kahawa",
      "Kamiti Corner",
    ],
    hasPhysicalBranch: true,
    intro:
      "In Nairobi County, Aquatace's Marurui branch — inside Kasarani constituency — delivers purified drinking water, bottled water, 6kg and 13kg cooking gas, and our online electronics catalogue across Kasarani, Roysambu and neighbouring estates: Thome, Ridgeways, Mirema, Garden Estate, Zimmerman, Mwiki and Kamiti Corner. Order online or on WhatsApp for delivery.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Nairobi | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Nairobi? Aquatace's Marurui branch delivers purified water, cooking gas and electronics across Kasarani, Roysambu and surrounding Nairobi estates. Order online or via WhatsApp.",
  },
  {
    slug: "kiambu",
    name: "Kiambu",
    branchSlugs: ["kihunguro", "membley", "tinganga"],
    serviceAreaSlugs: [
      "ruiru",
      "kamakis",
      "oj",
      "kimbo",
      "tatu-city",
      "juja",
      "ruaka",
      "thika-town",
      "kabete",
      "kikuyu",
      "limuru",
      "lari",
      "gatundu-north",
      "gatundu-south",
    ],
    otherPlaces: [
      "Kiambu Town",
      "Ndumberi",
      "Riabai",
      "Kiambaa",
      "Thindigua",
      "Githunguri",
      "OJ",
      "Kamakis",
      "Ruaka",
      "Karuri",
      "Muchatha",
      "Thika",
      "Kabete",
      "Kikuyu",
      "Limuru",
      "Lari",
      "Gatundu",
    ],
    hasPhysicalBranch: true,
    intro:
      "Kiambu County is home to three of Aquatace's four branches — Kihunguro and Membley along the Ruiru/Thika Road corridor, and Ting'ang'a near Kiambu town — giving us strong local coverage for water refill and cooking gas delivery. Kihunguro and Membley reach Ruiru, Kamakis, OJ, Kimbo, Tatu City, Juja and Thika town; Ting'ang'a serves Kiambu town, Ndumberi, Riabai, Kiambaa and Ruaka. Further out — Kabete, Kikuyu, Limuru, Lari, Gatundu North and Gatundu South — our Membley hub coordinates delivery; we confirm timing and any extra courier cost before dispatch. Electronics ship from our online catalogue to all of these areas too.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Kiambu County | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Kiambu County? Three Aquatace branches — Kihunguro, Membley and Ting'ang'a — deliver purified water, cooking gas and electronics across Ruiru, Kamakis, OJ and Kiambu town. Order via WhatsApp.",
  },
  {
    slug: "muranga",
    name: "Murang'a",
    branchSlugs: [],
    serviceAreaSlugs: [],
    otherPlaces: [],
    hasPhysicalBranch: false,
    intro:
      "Aquatace doesn't have a walk-in branch in Murang'a County, but we do dispatch orders there — coordinated through our Membley hub, the same way we handle delivery outside our core Nairobi and Kiambu coverage. Water refills, cooking gas and electronics can all be ordered on WhatsApp; we'll confirm delivery timing and any courier cost before dispatch.",
    seoTitle: "Water Refill, Gas Refill & Gas Supply in Murang'a County | Aquatace",
    seoDescription:
      "Need water refill, gas refill or gas supply in Murang'a County? Aquatace delivers purified water, cooking gas and electronics, coordinated through our Membley hub. No physical branch — order and confirm delivery via WhatsApp.",
  },
];

export function getCounty(slug: string): CountyPage | undefined {
  return counties.find((c) => c.slug === slug);
}
