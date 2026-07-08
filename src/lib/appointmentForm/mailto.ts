export function buildMailtoHref(to: string, subject: string, bodyLines: string[]): string {
  const body = bodyLines.filter(Boolean).join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
