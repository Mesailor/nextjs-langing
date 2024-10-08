import Image from "next/image";

interface Props {
  name: string;
  position: string;
  description: string;
  src: string;
}

export function MemberCard({ name, position, description, src }: Props) {
  return (
    <div
      style={{ maxWidth: "410px", minWidth: "320px" }}
      className="w-full h-full bg-white rounded-3xl"
    >
      <Image
        className="rounded-t-3xl object-cover w-full"
        src={src}
        alt={name}
        width={400}
        height={300}
      />
      <div className="p-8 flex flex-col gap-2">
        <div>
          <p className="text-black text-xl font-medium">{name}</p>
          <p className="text-gray-500 font-medium">{position}</p>
        </div>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}
