const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// Per-location overrides so a location's grooming inquiries route to that
// location's own Web3Forms access key/inbox instead of the shared default.
const GROOMING_KEYS_BY_LOCATION_SLUG: Record<string, string | undefined> = {
  toronto: process.env.NEXT_PUBLIC_WEB3FORMS_GROOMING_KEY_TORONTO,
  mississauga: process.env.NEXT_PUBLIC_WEB3FORMS_GROOMING_KEY_MISSISSAUGA,
};

export function getGroomingAccessKey(locationSlug: string, fallbackKey: string): string {
  return GROOMING_KEYS_BY_LOCATION_SLUG[locationSlug] || fallbackKey;
}

export async function submitToWeb3Forms(
  accessKey: string,
  subject: string,
  data: Record<string, string | string[] | undefined>
): Promise<void> {
  if (!accessKey) throw new Error("Missing Web3Forms access key");

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      subject,
      from_name: "Pampered Paws Website",
      ...data,
    }),
  });

  const result = await res.json();
  if (!result.success) {
    throw new Error(result.message || "Submission failed. Please try again.");
  }
}
