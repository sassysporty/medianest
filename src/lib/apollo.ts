const APOLLO_API_KEY = process.env.APOLLO_API_KEY!;
const BASE_URL = "https://api.apollo.io/v1";

export interface ApolloPerson {
  id: string;
  first_name: string;
  last_name: string;
  name: string;
  title: string;
  email: string;
  linkedin_url: string;
  city: string;
  state: string;
  country: string;
  organization: {
    name: string;
    website_url: string;
    industry: string;
    estimated_num_employees: number;
    city: string;
    state: string;
  };
}

// Enrich a person by email (works on free plan)
export async function enrichPerson(email: string) {
  const res = await fetch(`${BASE_URL}/people/match`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": APOLLO_API_KEY,
    },
    body: JSON.stringify({ email }),
  });
  return res.json();
}

// Enrich a company by domain (works on free plan)
export async function enrichCompany(domain: string) {
  const res = await fetch(`${BASE_URL}/organizations/enrich`, {
    method: "GET",
    headers: { "X-Api-Key": APOLLO_API_KEY },
  });
  return res.json();
}
