import { AppearInSight } from "@/components/UI/components/AppearInSight";
import { platforms } from "../content";

export function ManagingOn() {
  return (
    <div className="w-full mx-auto py-6 px-20 hidden sm:flex flex-col xl:flex-row justify-between items-center gap-16">
      <AppearInSight>
        <h2 className="text-center text-3xl">Managing and promoting on</h2>
      </AppearInSight>
      <AppearInSight>
        <div
          style={{ maxWidth: "450px" }}
          className="flex flex-wrap justify-center gap-16"
        >
          {platforms.map((platform) => (
            <img
              key={platform.src}
              className="w-16 h-16"
              src={platform.src}
              alt={platform.name}
            ></img>
          ))}
        </div>
      </AppearInSight>
    </div>
  );
}
