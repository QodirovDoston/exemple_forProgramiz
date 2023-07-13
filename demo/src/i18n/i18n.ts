import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ENG from "./locales/eng/translation.json"
import UZB from "./locales/uz/translation.json"
import RUS from "./locales/ru/translation.json"

const resources = {
  uz: {
    translation: UZB
  },
  eng: {
    translation: ENG
  },
  rus:{
    translation: RUS
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz", 
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;
