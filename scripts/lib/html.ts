/**
 * Minimal HTML -> plain-paragraph converter for the Webflow CSV exports.
 * Not a full HTML parser — just enough to turn the rich-text fields in these
 * CSVs into the `string[]` paragraph arrays our Sanity schemas use.
 */
const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&nbsp;": " ",
  "&rsquo;": "’",
  "&lsquo;": "‘",
  "&rdquo;": "”",
  "&ldquo;": "“",
  "&mdash;": "—",
  "&ndash;": "–",
  "&quot;": '"',
  "&#39;": "'",
  "&hellip;": "…",
};

function decodeEntities(text: string): string {
  return text.replace(/&[a-z#0-9]+;/gi, (match) => ENTITIES[match] ?? match);
}

export function htmlToParagraphs(html: string | undefined | null): string[] {
  if (!html) return [];
  let text = html
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<\/li>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|div|h[1-6]|ul|ol)>/gi, "\n\n")
    .replace(/<[^>]+>/g, "");
  text = decodeEntities(text);
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.replace(/[ \t]+/g, " ").replace(/^\s+|\s+$/gm, "").trim())
    .filter((paragraph) => paragraph.length > 0 && paragraph !== "‍");
}

export function htmlToPlainText(html: string | undefined | null): string {
  return htmlToParagraphs(html).join("\n\n");
}
