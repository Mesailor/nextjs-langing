export function TrustedBy() {
  return (
    <div className="py-6 flex flex-col gap-16">
      <h2 className={`text-center heading-2`}>TRUSTED BY</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-14">
        <img className="h-12" src="/noodlers.svg" alt="Noodlers" />
        <img className="h-12" src="/fortex.svg" alt="Fortex" />
        <img
          className="h-12"
          src="/center_of_mattress.svg"
          alt="Center of Mattress"
        />
      </div>
    </div>
  );
}
