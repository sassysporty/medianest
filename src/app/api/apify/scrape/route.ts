import { NextResponse } from "next/server";
import {
  runGoogleMapsSearch,
  getRunResults,
  getRunStatus,
} from "@/lib/apify";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, queries, runId, maxResults } = body;

    if (action === "search") {
      const data = await runGoogleMapsSearch(queries || [], maxResults || 20);
      return NextResponse.json(data);
    }

    if (action === "status") {
      const data = await getRunStatus(runId);
      return NextResponse.json(data);
    }

    if (action === "results") {
      const data = await getRunResults(runId);
      return NextResponse.json(data);
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (err) {
    console.error("Apify scrape error:", err);
    return NextResponse.json(
      { error: "Failed to run scraper" },
      { status: 500 }
    );
  }
}
