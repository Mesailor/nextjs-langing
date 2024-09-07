import { reviews } from "../content";
import { ReviewCard } from "./ReviewCard";

export function Reviews() {
  return (
    <div className="py-6 max-w-5xl mx-auto flex flex-col gap-10">
      <h2 className="text-center heading-2">REVIEWS</h2>
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {reviews.map((review) => (
          <ReviewCard {...review} />
        ))}
      </div>
    </div>
  );
}
