"use client";

import dynamic from "next/dynamic";

const CalBooking = dynamic(() => import("@/components/sections/CalBooking"), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
      <p className="text-gray-400">Loading calendar...</p>
    </div>
  ),
});

export default function CalBookingWrapper() {
  return <CalBooking />;
}
