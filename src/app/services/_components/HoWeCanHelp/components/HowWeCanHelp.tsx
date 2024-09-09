import { advantages } from "../content";
import { AdvantageCard } from "./AdvantageCard";

export function HowWeCanHelp() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto flex flex-col gap-10">
      <h2 className="text-center lg:text-5xl md:text-4xl text-3xl font-medium">
        Increase Your Brand Recognition, Traffic, and Sales with Us
      </h2>
      <div className="flex justify-center flex-wrap gap-10">
        {advantages.map((advantage) => (
          <AdvantageCard key={advantage.src} {...advantage} />
        ))}
      </div>
    </div>
  );
}
