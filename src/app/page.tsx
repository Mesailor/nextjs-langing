import { FirstCallToAction } from "@/app/_components/FirstCallToAction";
import { TrustedBy } from "@/app/_components/TrustedBy";
import { RecentWork } from "@/app/_components/RecentWork";
import { OurServices } from "@/app/_components/OurServices";
import { ManagingOn } from "@/app/_components/ManagingOn";
import { Reviews } from "@/app/_components/Reviews";
import { SecondCallToAction } from "@/app/_components/SecondCallToAction";
import { OurTeam } from "@/app/_components/OurTeam";
import { BookCall } from "@/app/_components/BookCall";
import { FAQ } from "@/app/_components/FAQ";

export default function Home() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-20">
        <FirstCallToAction />
        <TrustedBy />
        <RecentWork />
        <OurServices />
        <ManagingOn />
        <Reviews />
        <SecondCallToAction />
        <OurTeam />
        <BookCall />
        <FAQ />
      </div>
    </div>
  );
}
