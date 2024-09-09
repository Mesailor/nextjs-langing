import { solutions } from "../content";
import { SolutionCardV1 } from "./SolutionCardV1";
import { SolutionCardV2 } from "./SolutionCardV2";

export function OfferingSolutions() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto flex flex-col gap-10">
      <h2 className="text-center lg:text-5xl md:text-4xl text-3xl font-medium">
        Offering End-to-End Marketing Solution
      </h2>
      <div className="flex flex-col gap-6">
        {solutions.map((solution, i) => {
          if (i % 2 === 0) {
            return <SolutionCardV1 key={solution.name} {...solution} />;
          } else {
            return <SolutionCardV2 key={solution.name} {...solution} />;
          }
        })}
      </div>
    </div>
  );
}
