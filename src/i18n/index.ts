import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import tr from './locales/tr.json';
import es from './locales/es.json';
import zh from './locales/zh.json';
import ar from './locales/ar.json';

const supportedLangs = ['en', 'tr', 'es', 'zh', 'ar'] as const;
type SupportedLang = (typeof supportedLangs)[number];

const rawSavedLang = localStorage.getItem('i18n-lang') || 'en';
const savedLang: SupportedLang = (supportedLangs as readonly string[]).includes(rawSavedLang)
  ? (rawSavedLang as SupportedLang)
  : 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      tr: { translation: tr },
      es: { translation: es },
      zh: { translation: zh },
      ar: { translation: ar },
    },
    lng: savedLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
