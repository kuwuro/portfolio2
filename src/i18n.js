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
                    introButton: "Scroll down or click the arrow to begin",
                    introButtonMobile: "Tap the arrow to begin",
                    downloadCV: "Download CV",
                    projectsTitle: "Projects",
                    aboutTitle: "About",
                    experienceTitle: "Experience",
                    fundflowDescription: "This will be the description for Fundflow",
                }
            },
            es: {
                translation: {
                    intro: "Spanish placeholder",
                    introButton: "Haz scroll hacia abajo o haz click en la flecha para empezar",
                    introButtonMobile: "Toca la flecha para empezar",
                    downloadCV: "Descargar CV",
                    projectsTitle: "Proyectos",
                    aboutTitle: "Sobre mí",
                    experienceTitle: "Experiencia",
                    fundflowDescription: "Esta será la descripción de Fundflow",
                }
            },
            ca: {
                translation: {
                    intro: "Catalan placeholder",
                    introButton: "Fes scroll cap avall o clica la fletxa per començar",
                    introButtonMobile: "Toca la fletxa per començar",
                    downloadCV: "Descarregar CV",
                    projectsTitle: "Projectes",
                    aboutTitle: "Sobre mi",
                    experienceTitle: "Experiència",
                    fundflowDescription: "Aquesta serà la descripció de Fundflow",
                }
            }
        }
    });
