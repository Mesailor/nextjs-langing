import { platforms } from "../content";

export function ManagingOn() {
  return (
    <div className="w-full mx-auto py-6 px-20 hidden sm:flex flex-col xl:flex-row justify-between items-center gap-16">
      <h2 className="text-center text-3xl">Managing and promoting on</h2>
      <div
        style={{ maxWidth: "450px" }}
        className="flex flex-wrap justify-center gap-16"
      >
        {platforms.map((platform) => (
          <img
            className="w-16 h-16"
            src={platform.src}
            alt={platform.name}
          ></img>
        ))}
      </div>
    </div>
  );
}
