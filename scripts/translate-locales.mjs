/**
 * Traduce al árabe, turco y chino las cadenas que siguen en inglés.
 * Google limita peticiones; este script es REANUDABLE:
 * - Solo traduce claves que aún son iguales a en.json
 * - Máximo BATCH_SIZE por idioma (default 10)
 * - Pausa DELAY_MS entre peticiones (default 3500 ms)
 * - LANG=ar|tr|zh procesa solo ese idioma (menos peticiones = menos bloqueos)
 *
 * Ejemplos:
 *   node scripts/translate-locales.mjs
 *   BATCH=8 DELAY=4000 node scripts/translate-locales.mjs
 *   LANG=ar BATCH=12 node scripts/translate-locales.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { translate } from '@vitalets/google-translate-api';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(__dirname, '../src/i18n/locales');

const BATCH_SIZE = parseInt(process.env.BATCH || '10', 10);
const DELAY_MS = parseInt(process.env.DELAY || '3500', 10);
const ONLY_LANG = process.env.LANG || null; // 'ar' | 'tr' | 'zh' | null = todos

function getVal(obj, keyPath) {
  let cur = obj;
  for (const p of keyPath.split('.')) cur = cur && cur[p];
  return typeof cur === 'string' ? cur : null;
}

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

async function main() {
  const en = JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json'), 'utf8'));
  const LANG_MAP = { ar: 'ar', tr: 'tr', zh: 'zh' };
  const langs = ONLY_LANG ? [[ONLY_LANG, LANG_MAP[ONLY_LANG]]] : Object.entries(LANG_MAP);

  for (const [lang, code] of langs) {
    const listPath = path.join(localesDir, `to_translate_${lang}.json`);
    if (!fs.existsSync(listPath)) continue;

    const items = JSON.parse(fs.readFileSync(listPath, 'utf8'));
    const localePath = path.join(localesDir, `${lang}.json`);
    const data = JSON.parse(fs.readFileSync(localePath, 'utf8'));

    const stillEnglish = items.filter(({ key, en: enVal }) => getVal(data, key) === enVal);
    const batch = stillEnglish.slice(0, BATCH_SIZE);

    if (batch.length === 0) {
      console.log(`${lang}: nothing left to translate.`);
      continue;
    }

    console.log(`\n${lang}: translating ${batch.length} of ${stillEnglish.length} remaining...`);

    for (let i = 0; i < batch.length; i++) {
      const { key, en: enVal } = batch[i];
      try {
        const text = enVal.replace(/\s+/g, ' ').trim();
        if (!text) {
          setByPath(data, key, enVal);
          continue;
        }
        const { text: translated } = await translate(text, { from: 'en', to: code });
        setByPath(data, key, translated || enVal);
      } catch (err) {
        console.warn(`  [${key}] ${err.message}`);
        setByPath(data, key, enVal);
      }
      if ((i + 1) % 15 === 0) console.log(`  ${i + 1}/${batch.length}`);
      await sleep(DELAY_MS);
    }

    fs.writeFileSync(localePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    console.log(`  Saved. ${stillEnglish.length - batch.length} left for next run.`);
  }
  console.log('\nDone. Run again to continue translating.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
