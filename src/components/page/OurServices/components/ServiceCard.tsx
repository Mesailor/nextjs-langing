import Link from "next/link";

interface Props {
  name: string;
  description: string;
  src: string;
}

export function ServiceCard({ name, description, src }: Props) {
  return (
    <div
      style={{ maxWidth: "490px" }}
      className="bg-black h-full rounded-3xl flex flex-col min-w-80 sm:min-w-96"
    >
      <div className="w-full">
        <img className="object-cover rounded-3xl" src={src} alt={name} />
      </div>
      <div className="grow p-6 flex flex-col justify-between gap-4">
        <div className="flex flex-col gap-6">
          <h3 className="text">{name}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
        <Link className="btn btn-secondary block w-fit" href="/services">
          Read More
        </Link>
      </div>
    </div>
  );
}
