import { phone } from "@/config";

export function PhoneLink() {
  return (
    <a className="hover:text-gray-400" href={`tel:${phone.phone}`}>
      {phone.text}
    </a>
  );
}
