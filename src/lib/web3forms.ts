const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

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
