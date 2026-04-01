import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const [contacts, audits, subscribers, bookings] = await Promise.all([
      supabase.from("contact_submissions").select("*", { count: "exact" }),
      supabase.from("audit_requests").select("*", { count: "exact" }),
      supabase.from("newsletter_subscribers").select("*", { count: "exact" }),
      supabase.from("bookings").select("*", { count: "exact" }),
    ]);

    return NextResponse.json({
      contacts: {
        count: contacts.count || 0,
        recent: contacts.data?.slice(0, 10) || [],
      },
      audits: {
        count: audits.count || 0,
        recent: audits.data?.slice(0, 10) || [],
      },
      subscribers: {
        count: subscribers.count || 0,
        recent: subscribers.data?.slice(0, 10) || [],
      },
      bookings: {
        count: bookings.count || 0,
        recent: bookings.data?.slice(0, 10) || [],
      },
    });
  } catch (err) {
    console.error("Admin stats error:", err);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
