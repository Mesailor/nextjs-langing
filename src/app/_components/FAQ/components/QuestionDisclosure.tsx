"use client";
import { PlusIcon } from "@/components/UI/icons/PlusIcon";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

interface Props {
  question: string;
  answer: string;
}

export function QuestionDisclosure({ question, answer }: Props) {
  return (
    <Disclosure
      as="div"
      className="py-6 flex flex-col gap-4"
      defaultOpen={false}
    >
      <DisclosureButton className="group flex gap-4">
        <div className="text-gray-500 group-data-[open]:rotate-45 transition-all">
          <PlusIcon />
        </div>
        <p className="text-black text-lg font-semibold text-start">
          {question}
        </p>
      </DisclosureButton>
      <DisclosurePanel
        transition
        className="text-gray-500 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
      >
        {answer}
      </DisclosurePanel>
    </Disclosure>
  );
}
