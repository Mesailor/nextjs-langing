import { CalendlyBooking } from "./CalendlyBooking";

export function BookCall() {
  return (
    <div className="max-w-5xl mx-auto py-6 px-4 flex flex-col gap-10">
      <h2 className="text-center heading-2">BOOK A CALL TODAY</h2>
      <div className="h-screen">
        <div className="h-5/6">
          <CalendlyBooking />
        </div>
      </div>
    </div>
  );
}
