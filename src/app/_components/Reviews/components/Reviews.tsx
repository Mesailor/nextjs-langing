import { AppearInSight } from "@/components/UI/components/AppearInSight";
import { reviews } from "../content";
import { ReviewCard } from "./ReviewCard";

export function Reviews() {
  return (
    <div className="py-6 max-w-5xl mx-auto flex flex-col gap-10">
      <AppearInSight>
        <h2 className="text-center heading-2">REVIEWS</h2>
      </AppearInSight>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </div>
    </div>
  );
}
