import { AppearInSight } from "@/components/UI/components/AppearInSight";

interface Props {
  name: string;
  description: string;
  src: string;
}

export function RecentWorkCard({ name, description, src }: Props) {
  return (
    <AppearInSight>
      <div className="mx-auto min-w-80 w-3/4 lg:w-full flex flex-col gap-8">
        <img
          className="w-full aspect-square object-cover rounded-3xl"
          src={src}
          alt={name}
        />
        <div className="text-center flex flex-col gap-5">
          <p className="text">{name}</p>
          <p className="text-xl text-gray-200">{description}</p>
        </div>
      </div>
    </AppearInSight>
  );
}
