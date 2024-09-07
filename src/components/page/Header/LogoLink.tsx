import Link from "next/link";

export function LogoLink() {
  return (
    <Link href="/">
      <img
        style={{ width: "140px", height: "40px" }}
        className="object-cover"
        src="/emotion.svg"
        alt="Logo"
      />
    </Link>
  );
}
