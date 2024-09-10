import Image from "next/image";
import Link from "next/link";

export function LogoLink() {
  return (
    <Link href="/">
      <Image
        priority
        style={{ width: "140px", height: "40px" }}
        className="object-cover"
        src="/emotion.svg"
        alt="Logo"
        width={140}
        height={40}
      />
    </Link>
  );
}
