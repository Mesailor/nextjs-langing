import { contacts } from "../content";

export function Footer() {
  return (
    <div className="w-full border-t border-gray-900 p-12 flex justify-between flex-wrap gap-6">
      <div>
        <p>© EMOTION TECH MARKETING MANAGEMENT, 2024</p>
      </div>
      <div className="flex gap-6">
        {contacts.map((contact) => (
          <a key={contact.href} href={contact.href} target="_blank">
            <img
              className="w-6 h-6 object-cover"
              src={contact.src}
              alt={contact.name}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
