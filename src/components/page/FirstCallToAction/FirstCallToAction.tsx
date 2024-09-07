import { Background } from "./Background";
import { HightechVideo } from "./HightechVideo";

export function FirstCallToAction() {
  return (
    <Background>
      <div className="max-w-6xl mx-auto pt-10 pb-20 flex flex-col justify-around items-center gap-14">
        <h1 className={`px-6 text-center heading-1`}>
          MARKETING AGENCY IN UAE
        </h1>
        <div className="overflow-hidden lg:px-6">
          <HightechVideo />
        </div>
        <p className="max-w-5xl px-6 text-center p-secondary">
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
