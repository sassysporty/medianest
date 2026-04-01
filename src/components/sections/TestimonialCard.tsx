import type { Testimonial } from "@/types";

export default function TestimonialCard({ name, business, quote }: Testimonial) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8">
      <p className="text-gray-600 italic mb-6 leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{business}</p>
      </div>
    </div>
  );
}
