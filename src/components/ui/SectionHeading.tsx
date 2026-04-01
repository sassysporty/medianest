interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg text-gray-500 ${centered ? "max-w-2xl mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
