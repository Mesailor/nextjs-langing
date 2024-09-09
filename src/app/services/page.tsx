import { CallToAction } from "./_components/CallToAction";
import { HowWeCanHelp } from "./_components/HoWeCanHelp";
import { OfferingSolutions } from "./_components/OfferingSolutions";

export default function ServicesPage() {
  return (
    <div className="w-full">
      <CallToAction />
      <OfferingSolutions />
      <HowWeCanHelp />
    </div>
  );
}
