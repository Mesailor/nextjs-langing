import { AppearInSight } from "@/components/UI/components/AppearInSight";
import { CalendlyBooking } from "./CalendlyBooking";

export function BookCall() {
  return (
    <div
      id="booking"
      className="max-w-5xl mx-auto py-6 px-4 flex flex-col gap-10"
    >
      <AppearInSight>
        <h2 className="text-center heading-2">BOOK A CALL TODAY</h2>
      </AppearInSight>
      <div className="h-fit">
        <CalendlyBooking />
      </div>
    </div>
  );
}
