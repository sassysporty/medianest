import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payload = body.payload || body;
    const eventType = body.triggerEvent || body.type || "BOOKING_CREATED";

    const booking = {
      cal_booking_id: String(payload.bookingId || payload.id || ""),
      name: payload.attendees?.[0]?.name || payload.responses?.name?.value || "",
      email: payload.attendees?.[0]?.email || payload.responses?.email?.value || "",
      phone: payload.responses?.phone?.value || payload.attendees?.[0]?.phone || "",
      service: payload.eventTitle || payload.title || "Consultation",
      date: payload.startTime
        ? new Date(payload.startTime).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "",
      time: payload.startTime
        ? new Date(payload.startTime).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })
        : "",
      status:
        eventType === "BOOKING_CANCELLED"
          ? "cancelled"
          : eventType === "BOOKING_RESCHEDULED"
            ? "pending"
            : "pending",
      notes: payload.additionalNotes || payload.responses?.notes?.value || "",
    };

    if (eventType === "BOOKING_CANCELLED" && booking.cal_booking_id) {
      const { error } = await supabase
        .from("bookings")
        .update({ status: "cancelled" })
        .eq("cal_booking_id", booking.cal_booking_id);
      if (error) console.error("Booking cancel error:", error);
    } else {
      const { error } = await supabase.from("bookings").upsert(booking, {
        onConflict: "cal_booking_id",
      });
      if (error) console.error("Booking upsert error:", error);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Cal webhook error:", err);
    return NextResponse.json({ success: true });
  }
}
