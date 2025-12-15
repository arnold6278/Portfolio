import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const pdfPath = path.join(root, "public", "resume.pdf");
const outDir = path.join(root, "src", "data");
const outFile = path.join(outDir, "skills.ts");

function normalizeText(txt) {
  return txt.replace(/\r/g, "").replace(/[\u2022\u2023\u25E6\u2043\u2219]/g, "•");
}

function extractSkillsSection(text) {
  const t = normalizeText(text);
  // Try to find a heading like 'Skills' or 'Technical Skills'
  const headingRegex = /(technical\s+skills|skills)\s*[:\n]/i;
  const m = headingRegex.exec(t);
  if (!m) return null;
  const startIdx = m.index + m[0].length;
  // Take up to next heading-like line (ALL CAPS or a blank line gap of 2)
  const rest = t.slice(startIdx);
  const lines = rest.split(/\n/);
  const collected = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) break; // stop at first blank line
    // stop at next section heading (heuristic)
    if (/^[A-Z][A-Z\s/&-]{3,}$/.test(trimmed)) break;
    collected.push(trimmed);
  }
  if (!collected.length) return null;
  return collected.join(" ");
}

function tokenizeSkills(block) {
  if (!block) return [];
  // Split by bullets, commas, semicolons
  const parts = block
    .split(/•|,|;|\|/)
    .map((s) => s.trim())
    .filter(Boolean);
  // Deduplicate and limit length
  const seen = new Set();
  const out = [];
  for (let p of parts) {
    // Collapse multiple spaces
    p = p.replace(/\s{2,}/g, " ");
    // Keep phrases up to ~60 chars
    if (p.length > 0 && p.length <= 60 && !seen.has(p.toLowerCase())) {
      seen.add(p.toLowerCase());
      out.push(p);
    }
  }
  return out;
}

async function main() {
  if (!fs.existsSync(pdfPath)) {
    console.error(`resume.pdf not found at ${pdfPath}`);
    process.exit(1);
  }
  const dataBuffer = fs.readFileSync(pdfPath);
  const parsed = await pdf(dataBuffer).catch((e) => {
    console.error("Failed to parse PDF:", e);
    process.exit(1);
  });
  const skillsBlock = extractSkillsSection(parsed.text) || "";
  let skills = tokenizeSkills(skillsBlock);

  // Fallback: if no skills found, keep existing file as-is
  if (!skills.length) {
    console.warn("No explicit Skills section found; leaving existing skills.ts unchanged.");
    process.exit(0);
  }

  // Ensure output directory exists
  fs.mkdirSync(outDir, { recursive: true });
  const header = `// Auto-generated from resume.pdf. Edit resume or rerun extractor.\n`;
  const body = `const skills: string[] = ${JSON.stringify(skills, null, 2)};\n\nexport default skills;\n`;
  fs.writeFileSync(outFile, header + body, "utf8");
  console.log(`Wrote ${skills.length} skills to ${path.relative(root, outFile)}`);
}

main();
