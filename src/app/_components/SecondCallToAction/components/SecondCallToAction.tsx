export function SecondCallToAction() {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(50% 50% at 50% 50%, #273969 0%, rgb(3, 19, 60) 80%)",
        height: "600px",
      }}
      className="w-full"
    >
      <div className="h-full py-20 px-6 flex flex-col justify-center gap-8">
        <h2 className="text-center heading-2">STILL THINKING?</h2>
        <p style={{ maxWidth: "420px" }} className="text text-center mx-auto">
          Book a call or meeting now to discuss your project with us!
        </p>
        <div className="flex gap-6 mx-auto">
          <a href="#booking" className="btn btn-primary">
            Book a call
          </a>
          <a href="/services" className="btn btn-secondary">
            Our services
          </a>
        </div>
      </div>
    </div>
  );
}
