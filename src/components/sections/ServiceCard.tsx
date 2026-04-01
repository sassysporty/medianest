import Link from "next/link";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  variant?: "overview" | "full";
  href?: string;
}

export default function ServiceCard({
  service,
  variant = "overview",
  href,
}: ServiceCardProps) {
  if (variant === "overview") {
    const content = (
      <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all group">
        <div className="text-4xl mb-4">{service.icon}</div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-800 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-500 leading-relaxed">{service.description}</p>
        {href && (
          <span className="inline-block mt-4 text-sm font-semibold text-[#ff5e6c] group-hover:translate-x-1 transition-transform">
            Learn more →
          </span>
        )}
      </div>
    );

    if (href) {
      return <Link href={href}>{content}</Link>;
    }
    return content;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow flex flex-col">
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-500 mb-6 leading-relaxed">
        {service.description}
      </p>
      {service.features && (
        <ul className="space-y-2 mb-6 flex-1">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm text-gray-600"
            >
              <span className="text-green-500 mt-0.5">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      <div className="border-t pt-4 mt-auto flex items-center justify-between">
        {service.price && (
          <p className="text-2xl font-bold text-blue-800">{service.price}</p>
        )}
        {href && (
          <Link
            href={href}
            className="text-sm font-semibold text-[#ff5e6c] hover:text-[#e84d5b] transition-colors"
          >
            View Details →
          </Link>
        )}
      </div>
    </div>
  );
}
