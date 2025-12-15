import i18next from "i18next";

import es from "./es.json";
import en from "./en.json";
import fr from "./fr.json";
import ar from "./ar.json";

const RTL_LANGS = ["ar"];

i18next.init({
  lng: "es", // idioma por defecto
  fallbackLng: "es",
  resources: {
    es: { translation: es },
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar }
  }
});

export function updateDirection() {
  const lang = i18next.language;
  const isRTL = RTL_LANGS.includes(lang);

  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";

  document.body.classList.toggle("rtl", isRTL);
}

export function translatePage() {
  // Textos normales
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = i18next.t(key);
  });

  // Atributos (placeholder, title, aria-label, etc)
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const key = el.dataset.i18n;
    const attr = el.dataset.i18nAttr;
    el.setAttribute(attr, i18n.t(key));
  });
}


export default i18next;
