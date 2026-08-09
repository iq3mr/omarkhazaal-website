export interface ParsedSurah {
  title: string;
  body: string;
}

export function toArabicNumerals(text: string): string {
  const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return text.replace(/\((\d+)\)/g, (_, num) => {
    const converted = num.replace(/\d/g, (d: string) => arabicDigits[parseInt(d, 10)]);
    return `(${converted})`;
  });
}

export function parseQuranJson(jsonRaw: Record<string, unknown> | string): ParsedSurah[] {
  let fullText = "";
  if (typeof jsonRaw === "string") {
    fullText = jsonRaw;
  } else if (jsonRaw && typeof jsonRaw === "object") {
    const keys = Object.keys(jsonRaw);
    if (keys.length > 0) {
      fullText = keys[0];
    }
  }

  // Remove UTF-8 BOM if present
  fullText = fullText.replace(/^\uFEFF/, "");

  // Convert verse ending numbers (1), (2) to Eastern Arabic numerals (١), (٢), (٣)
  fullText = toArabicNumerals(fullText);

  // Split by Surah header pattern
  const parts = fullText.split(/(سورة\s+[^\n]+)/g).filter(Boolean);
  const surahs: ParsedSurah[] = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i].trim();
    if (part.startsWith("سورة")) {
      const title = part;
      const body = parts[i + 1] ? parts[i + 1].trim() : "";
      surahs.push({ title, body });
      i++; // Skip body index in next iteration
    }
  }

  return surahs;
}
