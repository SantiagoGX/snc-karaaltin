/**
 * Translates missing strings in ar, tr, zh from English using free-translate.
 * Run: node scripts/translate-locales.cjs
 */
const fs = require('fs');
const path = require('path');

const localesDir = path.join(__dirname, '../src/i18n/locales');
const LANG_MAP = { ar: 'ar', tr: 'tr', zh: 'zh' };

function setByPath(obj, keyPath, value) {
  const parts = keyPath.split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (!cur[p]) cur[p] = {};
    cur = cur[p];
  }
  cur[parts[parts.length - 1]] = value;
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function translateBatch(translate, items, targetLang, delayMs = 600) {
  const results = {};
  for (let i = 0; i < items.length; i++) {
    const { key, en } = items[i];
    try {
      const text = en.replace(/\s+/g, ' ').trim();
      if (!text) {
        results[key] = en;
        continue;
      }
      const translated = await translate(text, { from: 'en', to: targetLang });
      results[key] = translated || en;
    } catch (err) {
      console.warn(`  [${key}] failed:`, err.message);
      results[key] = en;
    }
    if ((i + 1) % 50 === 0) console.log(`  ${i + 1}/${items.length}`);
    await sleep(delayMs);
  }
  return results;
}

async function main() {
  const { translate } = require('free-translate');

  for (const [lang, code] of Object.entries(LANG_MAP)) {
    const listPath = path.join(localesDir, `to_translate_${lang}.json`);
    if (!fs.existsSync(listPath)) {
      console.log(`Skip ${lang}: no to_translate_${lang}.json`);
      continue;
    }
    const items = JSON.parse(fs.readFileSync(listPath, 'utf8'));
    console.log(`\nTranslating ${items.length} strings to ${lang}...`);
    const map = await translateBatch(translate, items, code);

    const localePath = path.join(localesDir, `${lang}.json`);
    const data = JSON.parse(fs.readFileSync(localePath, 'utf8'));
    for (const [key, value] of Object.entries(map)) {
      setByPath(data, key, value);
    }
    fs.writeFileSync(localePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`  Written ${localePath}`);
  }
  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
