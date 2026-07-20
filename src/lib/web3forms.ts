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

// Web3Forms only accepts file attachments via multipart/form-data — the JSON
// path above can't carry a File, so this is a separate submit function rather
// than an option on submitToWeb3Forms.
export async function submitToWeb3FormsWithFile(
  accessKey: string,
  subject: string,
  data: Record<string, string | undefined>,
  file: File
): Promise<void> {
  if (!accessKey) throw new Error("Missing Web3Forms access key");

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("subject", subject);
  formData.append("from_name", "Pampered Paws Website");
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) formData.append(key, value);
  }
  formData.append("attachment", file);

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
  });

  const result = await res.json();
  if (!result.success) {
    throw new Error(result.message || "Submission failed. Please try again.");
  }
}
