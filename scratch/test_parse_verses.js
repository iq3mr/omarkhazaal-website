import fs from "fs";
import path from "path";

const quranPath = path.join(process.cwd(), "public", "quran", "quran.json");
const raw = fs.readFileSync(quranPath, "utf8");
console.log("Quran file verified, size:", raw.length);
