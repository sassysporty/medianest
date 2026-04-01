"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalBooking() {
  const calUsername = process.env.NEXT_PUBLIC_CAL_USERNAME || "medianest";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#16123f" } },
      });
    })();
  }, []);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <Cal
        calLink={calUsername}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
