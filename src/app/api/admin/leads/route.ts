import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const icpId = searchParams.get("icp_id");

  let query = supabase
    .from("leads")
    .select("*, icps(name)")
    .order("created_at", { ascending: false });

  if (status) query = query.eq("status", status);
  if (icpId) query = query.eq("icp_id", icpId);

  const { data, error } = await query;

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const body = await request.json();

  // Support bulk insert
  const leads = Array.isArray(body) ? body : [body];

  const { data, error } = await supabase.from("leads").insert(leads).select();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

export async function PATCH(request: Request) {
  const { id, ...updates } = await request.json();

  const { data, error } = await supabase
    .from("leads")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}
