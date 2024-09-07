import { Header } from "@/components/page/Header";
import { FirstCallToAction } from "@/components/page/FirstCallToAction";
import { TrustedBy } from "@/components/page/TrustedBy";
import { RecentWork } from "@/components/page/RecentWork";
import { OurServices } from "@/components/page/OurServices";
import { ManagingOn } from "@/components/page/ManagingOn";
import { Reviews } from "@/components/page/Reviews";
import { SecondCallToAction } from "@/components/page/SecondCallToAction";
import { OurTeam } from "@/components/page/OurTeam";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="flex flex-col gap-20">
        <FirstCallToAction />
        <TrustedBy />
        <RecentWork />
        <OurServices />
        <ManagingOn />
        <Reviews />
        <SecondCallToAction />
        <OurTeam />
      </div>
    </div>
  );
}
