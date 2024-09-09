"use client";
import { BarsIcon } from "@/components/UI/icons/BarsIcon";
import { CrossIcon } from "@/components/UI/icons/CrossIcon";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  TransitionChild,
} from "@headlessui/react";
import Link from "next/link";
import { LogoLink } from "./LogoLink";
import { PhoneLink } from "./PhoneLink";
import { links } from "./links";

export function MobileHeader() {
  return (
    <Disclosure as="div" className="lg:hidden" defaultOpen={false}>
      <div className="mx-auto md:px-10 flex justify-between items-center gap-6 px-6 py-2">
        <DisclosureButton className="group h-6 w-6 relative">
          <BarsIcon className="absolute top-0 group-data-[open]:opacity-0 opacity-100 transition-all duration-200" />
          <CrossIcon className="absolute top-0 group-data-[open]:opacity-100 opacity-0 transition-all duration-200" />
        </DisclosureButton>
        <LogoLink />
      </div>
      <TransitionChild
        enter="ease-linear duration-200"
        enterFrom="h-0"
        enterTo="h-60"
        leave="ease-linear duration-200"
        leaveFrom="h-60"
        leaveTo="h-0"
      >
        <DisclosurePanel className="bg-black w-full absolute border-b border-gray-900 overflow-hidden">
          <div className="p-4 md:px-10 md:pb-6">
            <div className="flex flex-col gap-4 text-xl">
              {links.map((link) => (
                <Link
                  key={link.text}
                  className="hover:text-gray-400"
                  href={link.href}
                >
                  {link.text}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex gap-4">
              <p>Dubai / UAE</p>
              <PhoneLink />
            </div>
          </div>
        </DisclosurePanel>
      </TransitionChild>
    </Disclosure>
  );
}
