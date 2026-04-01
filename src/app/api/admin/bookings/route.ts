import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return NextResponse.json(data || []);
  } catch (err) {
    console.error("Bookings fetch error:", err);
    return NextResponse.json([], { status: 200 });
  }
}

export async function PATCH(req: Request) {
  try {
    const { id, ...updates } = await req.json();
    const { data, error } = await supabase
      .from("bookings")
      .update(updates)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (err) {
    console.error("Booking update error:", err);
    return NextResponse.json(
      { error: "Failed to update booking" },
      { status: 500 }
    );
  }
}
