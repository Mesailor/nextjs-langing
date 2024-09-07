interface Props {
  name: string;
  description: string;
  src: string;
}

export function ProudOfCard({ name, description, src }: Props) {
  return (
    <div className="w-80 flex flex-col gap-8">
      <img
        style={{ aspectRatio: "0.8" }}
        className="w-80 object-cover rounded-3xl"
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
