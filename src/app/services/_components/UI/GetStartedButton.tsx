import { ArrowRightIcon } from "@/components/UI/icons/ArrowRightIcon";

export function GetStartedButton() {
  return (
    <button className="w-fit bg-indigo-400 text-xl py-4 px-7 rounded-full flex justify-between gap-2 items-center hover:bg-white hover:text-black hover:gap-2.5 transition-all duration-300">
      <span>Get Started</span>
      <div className="h-5 border-x border-current"></div>
      <span>
        <ArrowRightIcon />
      </span>
    </button>
  );
}
