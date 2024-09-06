import { radiotechnika } from "@/app/fonts/fonts";
import { Background } from "./Background";
import { HightechVideo } from "./HightechVideo";

export function FirstCallToAction() {
  return (
    <Background>
      <div className="max-w-6xl mx-auto pt-10 pb-20 flex flex-col justify-around items-center gap-14">
        <h1
          className={`px-6 text-center lg:text-7xl md:text-5xl text-4xl tracking-tighter ${radiotechnika.className}`}
        >
          MARKETING AGENCY IN UAE
        </h1>
        <div className="overflow-hidden lg:px-6">
          <HightechVideo />
        </div>
        <p className="max-w-5xl px-6 text-center text-2xl font-medium tracking-tighter leading-normal">
          Welcome to a world where every click creates opportunities, every
          message matters, and every ad campaign shines. We connect you to your
          audience, turning ideas into profitable outcomes.
        </p>
        <div className="flex gap-6">
          <button className="btn btn-primary">Book a call</button>
          <button className="btn btn-secondary">Our services</button>
        </div>
      </div>
    </Background>
  );
}
