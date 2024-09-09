import { contacts } from "@/app/_components/Footer/content";
import Link from "next/link";
import { GetStartedButton } from "../../UI/GetStartedButton";

export function CallToAction() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://framerusercontent.com/images/tlqJPzfvfW00mea2ZcobdSJwCI.jpg")',
      }}
      className="w-full pt-20 pb-10 lg:px-20 md:px-10 px-6 flex flex-col gap-20"
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <p className="bg-zinc-800 text-indigo-400 font-medium w-fit px-4 py-2 rounded-2xl tracking-wide">
            SERVICES
          </p>
          <h1 className="heading-1 tracking-wide">
            LAUNCHING BRANDS, CAPTURING AUDIENCE
          </h1>
          <p className="text-2xl tracking-wide">
            We are committed to pushing the boundaries of what's possible.
          </p>
        </div>
        <GetStartedButton />
      </div>
      <div className="flex gap-8">
        {contacts.map((contact) => (
          <Link key={contact.src} href={contact.href}>
            <img className="h-12 w-12" src={contact.src} alt={contact.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}
