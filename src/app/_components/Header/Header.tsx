import { DesctopHeader } from "./DesctopHeader";
import { MobileHeader } from "./MobileHeader";

export function Header() {
  return (
    <div className="bg-black border-b border-gray-900 sticky top-0 z-10">
      <MobileHeader />
      <DesctopHeader />
    </div>
  );
}
