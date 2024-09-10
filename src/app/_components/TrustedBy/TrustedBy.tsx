import Image from "next/image";

export function TrustedBy() {
  return (
    <div className="py-6 flex flex-col gap-16">
      <h2 className={`text-center heading-2`}>TRUSTED BY</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-14">
        <Image
          className="h-12 w-auto"
          src="/noodlers.svg"
          alt="Noodlers"
          width={136}
          height={46}
        />
        <Image
          className="h-12 w-auto"
          src="/fortex.svg"
          alt="Fortex"
          width={136}
          height={46}
        />
        <Image
          className="h-12 w-auto"
          src="/center_of_mattress.svg"
          alt="Center of Mattress"
          width={136}
          height={46}
        />
      </div>
    </div>
  );
}
