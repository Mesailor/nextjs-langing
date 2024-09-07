import { ourServices } from "./ourSevices";
import { ServiceCard } from "./ServiceCard";

export function OurServices() {
  return (
    <div
      style={{
        backgroundImage: "radial-gradient(57.2% 57% at 50% 50%, indigo, black)",
      }}
    >
      <div className="max-w-5xl mx-auto p-6 flex flex-col gap-10">
        <h2 className="text-center heading-2">OUR SERVICES</h2>
        <div className="flex flex-col items-center lg:grid grid-cols-2 auto-rows-max gap-6">
          {ourServices.map((service) => (
            <ServiceCard {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
