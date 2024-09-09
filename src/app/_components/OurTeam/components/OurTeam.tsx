import { AppearInSight } from "@/components/UI/components/AppearInSight";
import { members } from "../content";
import { MemberCard } from "./MemberCard";

export function OurTeam() {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(50% 50% at 52.6% 44.9%,#1b8f7d 0%,rgb(0,0,0) 100%)",
      }}
      className="w-full"
    >
      <div className="py-6 max-w-6xl mx-auto flex flex-col gap-10">
        <AppearInSight>
          <h2 className="text-center heading-2">OUR TEAM</h2>
        </AppearInSight>
        <div className="px-6 flex flex-col items-center place-items-center md:grid md:grid-cols-2 lg:grid-cols-3 auto-rows-max gap-6">
          {members.map((member) => (
            <MemberCard key={member.description} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}
