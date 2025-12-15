import i18next from "i18next";

import es from "./es.json";
import en from "./en.json";

i18next.init({
  lng: "en", // idioma por defecto
  fallbackLng: "en",
  resources: {
    es: { translation: es },
    en: { translation: en }
  }
});

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
