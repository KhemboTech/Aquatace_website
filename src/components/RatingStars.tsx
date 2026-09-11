import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const SIZE_CLASS = { sm: "h-3.5 w-3.5", md: "h-5 w-5", lg: "h-8 w-8" } as const;

export function RatingStars({
  value,
  size = "md",
  className,
}: {
  value: number;
  size?: keyof typeof SIZE_CLASS;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      aria-label={`Rated ${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className={cn(
            SIZE_CLASS[size],
            n <= Math.round(value)
              ? "fill-amber-400 text-amber-400"
              : "fill-none text-muted-foreground/40",
          )}
        />
      ))}
    </div>
  );
}
