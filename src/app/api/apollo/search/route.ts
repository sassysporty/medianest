import { NextResponse } from "next/server";

const APIFY_TOKEN = process.env.APIFY_API_TOKEN!;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { industries, job_titles, locations, employee_range } = body;

    // Build Google Maps search queries from ICP data
    const queries: string[] = [];
    const industryList = industries?.length ? industries : ["business"];
    const locationList = locations?.length ? locations : ["United States"];

    for (const industry of industryList) {
      for (const location of locationList) {
        queries.push(`${industry} in ${location}`);
      }
    }

    // Use Apify's Google Maps Scraper (synchronous run for small queries)
    const actorId = "nwua9Gu5YrADL7ZDj";

    const runRes = await fetch(
      `https://api.apify.com/v2/acts/${actorId}/run-sync-get-dataset-items?token=${APIFY_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          searchStringsArray: queries.slice(0, 3), // limit to 3 queries
          maxCrawledPlacesPerSearch: 25,
          language: "en",
          deeperCityScrape: false,
          skipClosedPlaces: true,
        }),
      }
    );

    if (!runRes.ok) {
      const err = await runRes.text();
      console.error("Apify run error:", err);
      return NextResponse.json({ error: "Scraper failed", details: err }, { status: 500 });
    }

    const results = await runRes.json();

    // Transform Google Maps results into leads format
    const leads = (Array.isArray(results) ? results : []).map(
      (place: Record<string, unknown>) => ({
        name: place.title || place.name || "Unknown",
        title: (place.categoryName as string) || (place.category as string) || "",
        company: place.title || place.name || "",
        industry: (place.categoryName as string) || (place.category as string) || "",
        location: (place.address as string) || `${place.city || ""}, ${place.state || ""}`,
        phone: place.phone || null,
        website: place.website || place.url || null,
        email: null,
        linkedin_url: null,
        source: "google_maps",
      })
    );

    return NextResponse.json({ leads, total: leads.length });
  } catch (err) {
    console.error("Lead search error:", err);
    return NextResponse.json(
      { error: "Failed to search for leads" },
      { status: 500 }
    );
  }
}
