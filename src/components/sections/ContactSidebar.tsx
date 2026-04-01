import { siteConfig } from "@/config/site";

export default function ContactSidebar() {
  const { contact, hours } = siteConfig;
  const hasAddress = contact.address.street || contact.address.city;
  const hasPhone = contact.phone;
  const hasEmail = contact.email;

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Contact Information
        </h3>
        <div className="space-y-4 text-gray-600">
          {hasAddress ? (
            <div>
              <p className="font-medium text-gray-900">Address</p>
              <p>{contact.address.street}</p>
              <p>
                {contact.address.city}, {contact.address.state}{" "}
                {contact.address.zip}
              </p>
            </div>
          ) : (
            <div>
              <p className="font-medium text-gray-900">Address</p>
              <p className="text-gray-400 italic">Coming soon</p>
            </div>
          )}
          {hasPhone ? (
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <a
                href={contact.phoneHref}
                className="text-blue-800 hover:underline"
              >
                {contact.phone}
              </a>
            </div>
          ) : (
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p className="text-gray-400 italic">Coming soon</p>
            </div>
          )}
          {hasEmail ? (
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <a
                href={`mailto:${contact.email}`}
                className="text-blue-800 hover:underline"
              >
                {contact.email}
              </a>
            </div>
          ) : (
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-gray-400 italic">Coming soon</p>
            </div>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Business Hours
        </h3>
        <div className="space-y-2 text-gray-600 text-sm">
          {hours.map((h) => (
            <div key={h.day} className="flex justify-between">
              <span>{h.day}</span>
              <span>{h.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Free 30-Min Consultation
        </h3>
        <p className="text-blue-700 text-sm mb-4">
          Not sure what you need? Fill out the form and we&apos;ll help you
          figure out the best plan for your business.
        </p>
      </div>
    </div>
  );
}
