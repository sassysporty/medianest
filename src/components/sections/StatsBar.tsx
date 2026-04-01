import type { Stat } from "@/types";

interface StatsBarProps {
  stats: Stat[];
  variant?: "bar" | "grid";
}

export default function StatsBar({ stats, variant = "bar" }: StatsBarProps) {
  if (variant === "grid") {
    return (
      <div className="bg-gray-100 rounded-2xl p-10 text-center">
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl font-bold text-blue-800">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl font-bold text-blue-800">
                {stat.value}
              </div>
              <div className="text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
