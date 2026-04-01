import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET all content entries
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("site_content")
      .select("*")
      .order("page", { ascending: true });

    if (error) throw error;
    return NextResponse.json(data || []);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

// POST - create or upsert content
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { data, error } = await supabase
      .from("site_content")
      .upsert(body, { onConflict: "page,section_key" })
      .select();

    if (error) throw error;
    return NextResponse.json(data);
  } catch (err) {
    console.error("Content save error:", err);
    return NextResponse.json(
      { error: "Failed to save content" },
      { status: 500 }
    );
  }
}

// DELETE content entry
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    const { error } = await supabase.from("site_content").delete().eq("id", id);

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Content delete error:", err);
    return NextResponse.json(
      { error: "Failed to delete content" },
      { status: 500 }
    );
  }
}
