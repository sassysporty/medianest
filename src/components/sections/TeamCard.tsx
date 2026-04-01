import type { TeamMember } from "@/types";

export default function TeamCard({ name, role, bio }: TeamMember) {
  return (
    <div className="text-center">
      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full flex items-center justify-center">
        <span className="text-4xl text-white font-bold">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      </div>
      <h3 className="font-semibold text-gray-900">{name}</h3>
      <p className="text-blue-800 text-sm font-medium mb-2">{role}</p>
      <p className="text-gray-500 text-sm">{bio}</p>
    </div>
  );
}
