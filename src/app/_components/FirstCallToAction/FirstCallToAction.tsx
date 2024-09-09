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
        <p className="max-w-5xl px-6 text-center text">
          Welcome to a world where every click creates opportunities, every
          message matters, and every ad campaign shines. We connect you to your
          audience, turning ideas into profitable outcomes.
        </p>
        <div className="flex gap-6">
          <a href="#book-call" className="btn btn-primary">
            Book a call
          </a>
          <a href="/services" className="btn btn-secondary">
            Our services
          </a>
        </div>
      </div>
    </Background>
  );
}
