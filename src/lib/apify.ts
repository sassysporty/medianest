const APIFY_TOKEN = process.env.APIFY_API_TOKEN!;
const BASE_URL = "https://api.apify.com/v2";

export async function runGoogleMapsSearch(queries: string[], maxResults = 20) {
  // Uses the Google Maps Scraper actor
  const actorId = "nwua9Gu5YrADL7ZDj"; // compass/google-maps-scraper

  const res = await fetch(
    `${BASE_URL}/acts/${actorId}/runs?token=${APIFY_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        queries,
        maxCrawledPlacesPerQuery: maxResults,
        language: "en",
        includeWebResults: false,
      }),
    }
  );

  const run = await res.json();
  return run.data;
}

export async function runWebsiteContentScraper(urls: string[]) {
  // Uses the Website Content Crawler actor
  const actorId = "aYG0l9s7dbB7j3gbS"; // apify/website-content-crawler

  const res = await fetch(
    `${BASE_URL}/acts/${actorId}/runs?token=${APIFY_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        startUrls: urls.map((url) => ({ url })),
        maxCrawlPages: 1,
      }),
    }
  );

  const run = await res.json();
  return run.data;
}

export async function getRunResults(runId: string) {
  const res = await fetch(
    `${BASE_URL}/actor-runs/${runId}/dataset/items?token=${APIFY_TOKEN}`
  );

  return res.json();
}

export async function getRunStatus(runId: string) {
  const res = await fetch(
    `${BASE_URL}/actor-runs/${runId}?token=${APIFY_TOKEN}`
  );

  const data = await res.json();
  return data.data;
}

export async function runInstagramScraper(usernames: string[]) {
  const actorId = "shu8hvrXbJbY3Eb9W"; // apify/instagram-scraper

  const res = await fetch(
    `${BASE_URL}/acts/${actorId}/runs?token=${APIFY_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        directUrls: usernames.map(
          (u) => `https://www.instagram.com/${u}/`
        ),
        resultsType: "details",
        resultsLimit: 1,
      }),
    }
  );

  const run = await res.json();
  return run.data;
}
