interface Props {
  name: string;
  description: string;
  src: string;
}

export function RecentWorkCard({ name, description, src }: Props) {
  return (
    <div className="min-w-80 w-96 flex flex-col gap-8">
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
  );
}
