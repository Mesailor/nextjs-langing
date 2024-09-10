import { AppearInSight } from "@/components/UI/components/AppearInSight";
import { GetStartedButton } from "../../UI/GetStartedButton";
import Image from "next/image";

interface Props {
  src: string;
  name: string;
  slogan: string;
  points: string[];
  price: string;
}

export function SolutionCardV2({ src, name, slogan, points, price }: Props) {
  return (
    <AppearInSight>
      <div className="bg-white text-black w-full p-5 border border-gray-800 rounded-3xl flex flex-col lg:flex-row gap-10 hover:-translate-y-1 transition-transform duration-200">
        <Image
          className="rounded-xl lg:w-6/12 aspect-square object-cover lg:order-last"
          src={src}
          alt={name}
          width={1024}
          height={1024}
        />
        <div className="flex flex-col gap-6 justify-between">
          <div className="flex flex-col gap-6">
            <h3 className="text-4xl font-medium">{name}</h3>
            <div className="flex flex-col gap-3">
              <p className="text-xl font-medium">{slogan}</p>
              <ul className="flex flex-col gap-2 list-disc px-4">
                {points.map((point) => (
                  <li key={point} className="text-sm text-gray-700">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xl font-medium">Price: {price}</p>
              <p className="text-sm text-gray-700 mt-2">
                Pricing is customized to match the specific requirements of your
                project, guaranteeing optimal value.
              </p>
            </div>
          </div>
          <GetStartedButton />
        </div>
      </div>
    </AppearInSight>
  );
}
