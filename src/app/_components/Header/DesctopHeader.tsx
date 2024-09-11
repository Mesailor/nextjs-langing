import Link from "next/link";
import { LogoLink } from "./LogoLink";
import { PhoneLink } from "./PhoneLink";
import { links } from "./content";

export function DesctopHeader() {
  return (
    <div className="hidden lg:flex justify-between items-center gap-6 px-10 py-3">
      <div>
        <LogoLink />
      </div>
      <div className="flex grow justify-between">
        <div className="flex gap-4">
          {links.map((link) => (
            <Link
              key={link.text}
              className="hover:text-blue-500 transition-colors"
              href={link.href}
            >
              {link.text}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          <p>Dubai / UAE</p>
          <PhoneLink />
        </div>
      </div>
    </div>
  );
}
