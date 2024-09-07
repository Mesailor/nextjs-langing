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
      <img className="rounded-t-3xl object-cover" src={src} alt={name} />
      <div className="p-8 flex flex-col gap-2">
        <p className="text-black text-xl">{name}</p>
        <p className="text-gray-500">{position}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
}
