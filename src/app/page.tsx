import { Header } from "@/components/page/Header";
import { FirstCallToAction } from "@/components/page/FirstCallToAction";
import { TrustedBy } from "@/components/page/TrustedBy";
import { RecentWork } from "@/components/page/RecentWork";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col gap-20">
        <FirstCallToAction />
        <TrustedBy />
        <RecentWork />
      </div>
    </div>
  );
}
