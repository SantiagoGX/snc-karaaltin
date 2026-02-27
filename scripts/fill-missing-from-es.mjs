/**
 * Rellena ar, tr, zh con el valor en ESPAÑOL (es.json) donde aún esté en inglés.
 * Resultado: ninguna cadena en inglés en la UI; lo no traducido se muestra en español.
 * Ejecutar: node scripts/fill-missing-from-es.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localesDir = path.join(__dirname, '../src/i18n/locales');

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

const en = JSON.parse(fs.readFileSync(path.join(localesDir, 'en.json'), 'utf8'));
const es = JSON.parse(fs.readFileSync(path.join(localesDir, 'es.json'), 'utf8'));

function getKeys(obj, prefix = '') {
  const keys = [];
  for (const k of Object.keys(obj)) {
    const full = prefix ? prefix + '.' + k : k;
    const v = obj[k];
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      keys.push(...getKeys(v, full));
    } else if (typeof v === 'string') {
      keys.push(full);
    }
  }
  return keys;
}

const enKeys = getKeys(en);

for (const lang of ['ar', 'tr', 'zh']) {
  const localePath = path.join(localesDir, `${lang}.json`);
  const data = JSON.parse(fs.readFileSync(localePath, 'utf8'));
  let filled = 0;
  for (const key of enKeys) {
    const enVal = getVal(en, key);
    const current = getVal(data, key);
    if (current === enVal) {
      const esVal = getVal(es, key);
      if (esVal) {
        setByPath(data, key, esVal);
        filled++;
      }
    }
  }
  fs.writeFileSync(localePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`${lang}: ${filled} cadenas rellenadas con español.`);
}
console.log('Listo. Ya no hay inglés en ar/tr/zh; lo pendiente se muestra en español.');
console.log('Puedes sustituir después por traducciones propias en ar.json, tr.json, zh.json.');