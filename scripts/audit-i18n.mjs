import fs from "node:fs";
import path from "node:path";

const localesDir = path.join(process.cwd(), "src", "i18n", "locales");
const baseLocale = "en.json";
const targetLocales = ["es.json", "tr.json", "zh.json", "ar.json"];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function flatten(obj, prefix = "", out = new Set()) {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    for (const [key, value] of Object.entries(obj)) {
      const next = prefix ? `${prefix}.${key}` : key;
      flatten(value, next, out);
    }
    return out;
  }
  out.add(prefix);
  return out;
}

function missingKeys(baseKeys, targetKeys) {
  const missing = [];
  for (const key of baseKeys) {
    if (!targetKeys.has(key)) missing.push(key);
  }
  return missing;
}

const basePath = path.join(localesDir, baseLocale);
if (!fs.existsSync(basePath)) {
  console.error(`Missing base locale: ${basePath}`);
  process.exit(1);
}

const baseKeys = flatten(readJson(basePath));

let hasMissing = false;
for (const filename of targetLocales) {
  const targetPath = path.join(localesDir, filename);
  if (!fs.existsSync(targetPath)) {
    console.warn(`Missing locale file: ${targetPath}`);
    continue;
  }

  const targetKeys = flatten(readJson(targetPath));
  const missing = missingKeys(baseKeys, targetKeys);
  if (missing.length) {
    hasMissing = true;
    console.log(`\n${filename}: missing ${missing.length} keys`);
    for (const key of missing.slice(0, 50)) console.log(`- ${key}`);
    if (missing.length > 50) console.log(`... (+${missing.length - 50} more)`);
  } else {
    console.log(`\n${filename}: OK (no missing keys vs ${baseLocale})`);
  }
}

process.exit(hasMissing ? 2 : 0);
