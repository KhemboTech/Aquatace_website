import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { business } from "@/lib/business";

export function ReviewForm() {
  return (
    <Card className="mt-6 rounded-3xl border-border/60 shadow-[var(--shadow-soft)]">
      <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
        <div className="flex items-center gap-1 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-amber-400" />
          ))}
        </div>
        <h2 className="text-lg font-semibold">Enjoyed your delivery?</h2>
        <p className="text-sm text-muted-foreground">
          Leave us a rating on Google — it takes a few seconds and helps other customers find us.
        </p>
        <Button asChild className="mt-1 rounded-full">
          <a href={business.googleReviewUrl} target="_blank" rel="noreferrer">
            Rate us on Google
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
