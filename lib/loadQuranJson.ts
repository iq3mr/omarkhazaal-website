export interface QuranVerse {
  number: string;
  text: string;
  words: string[];
}

export interface ParsedSurah {
  title: string;
  body: string;
  verses: QuranVerse[];
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

      // Parse individual verses and words
      const verses: QuranVerse[] = [];
      const verseMatches = body.split(/(\([\u0660-\u0669]+\))/g).filter(Boolean);

      for (let j = 0; j < verseMatches.length; j += 2) {
        const verseText = verseMatches[j].trim();
        const verseNum = verseMatches[j + 1] ? verseMatches[j + 1].trim() : "";
        if (verseText) {
          const words = verseText.split(/\s+/).filter(Boolean);
          verses.push({
            number: verseNum,
            text: verseText,
            words: words,
          });
        }
      }

      surahs.push({ title, body, verses });
      i++; // Skip body index in next iteration
    }
  }

  return surahs;
}
