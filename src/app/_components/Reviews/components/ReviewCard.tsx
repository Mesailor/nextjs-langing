import Image from "next/image";

interface Props {
  name: string;
  tag: string;
  description: string;
  src: string;
}

export function ReviewCard({ name, tag, description, src }: Props) {
  return (
    <div className="bg-white text-black p-7 rounded-3xl min-w-80 w-80 flex flex-col gap-6">
      <div className="flex gap-4">
        <div>
          <Image
            className="w-12 h-12"
            src={src}
            alt={name}
            width={48}
            height={48}
          />
        </div>
        <div>
          <p className="text-xl font-semibold">{name}</p>
          <p className="text-sm text-gray-600">{tag}</p>
        </div>
      </div>
      <div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
