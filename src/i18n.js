import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallBackLng: "en",
        resources: {
            en: {
                translation: {
                    intro: "English intro",
                }
            },
            es: {
                translation: {
                    intro: "Spanish intro",
                }
            },
            ca: {
                translation: {
                    intro: "Catalan intro",
                }
            }
        }
    });
