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
                    intro: "English placeholder",
                    introButton: "Scroll down or click the arrow",
                    introButtonMobile: "Tap the arrow",
                    downloadCV: "Download CV",
                    projectsTitle: "Projects",
                    fundflowDescription: "This will be the description for Fundflow",
                }
            },
            es: {
                translation: {
                    intro: "Spanish placeholder",
                    introButton: "Haz scroll hacia abajo o haz click en la flecha",
                    introButtonMobile: "Toca la flecha",
                    downloadCV: "Descargar CV",
                    projectsTitle: "Proyectos",
                    fundflowDescription: "Esta será la descripción de Fundflow",
                }
            },
            ca: {
                translation: {
                    intro: "Catalan placeholder",
                    introButton: "Fes scroll cap avall o clica la fletxa",
                    introButtonMobile: "Toca la fletxa",
                    downloadCV: "Descarregar CV",
                    projectsTitle: "Projectes",
                    fundflowDescription: "Aquesta serà la descripció de Fundflow",
                }
            }
        }
    });
