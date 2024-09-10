import { AppearInSight } from "@/components/UI/components/AppearInSight";
import Image from "next/image";

interface Props {
  src: string;
  name: string;
  description: string;
}

export function AdvantageCard({ src, name, description }: Props) {
  return (
    <AppearInSight>
      <div className="flex flex-col gap-2 min-w-80 w-80">
        <Image
          className="h-10 w-10 mx-auto"
          src={src}
          alt={name}
          width={40}
          height={40}
        />
        <p className="text-xl font-medium text-center">{name}</p>
        <p className="text-center text-sm text-gray-300">{description}</p>
      </div>
    </AppearInSight>
  );
}
