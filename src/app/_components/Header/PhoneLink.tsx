import { phone } from "./content";

export function PhoneLink() {
  return (
    <a
      className="hover:text-blue-500 transition-colors"
      href={`tel:${phone.phone}`}
    >
      {phone.text}
    </a>
  );
}
