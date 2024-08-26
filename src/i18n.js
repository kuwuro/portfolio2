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
                    visitButton: "Visit",
                    projectsTitle: "Projects",
                    aboutTitle: "About me",
                    experienceTitle: "Experience",
                    fundflowDescription: "A crowdfunding platform for everyone to fund their own projects. Made as my degree's final project.",
                    desktopfolioDescription: "My personal portfolio, in an old desktop's style.\nInspired by Windows 95 and 98.",
                    deltashopDescription: "An educational activity website where I learned to use arrays and eventListeners, among other things.\nInspired in Undertale, a game by Toby Fox.",
                    deltabarksDescription: "Website made for a small business that sells dog collars and related products.",
                    canmauriDescription: "Website made for a restaurant that organizes events and weddings. Made during my internship at a marketing company.",
                }
            },
            es: {
                translation: {
                    intro: "Spanish placeholder",
                    introButton: "Haz scroll hacia abajo o haz click en la flecha para empezar",
                    introButtonMobile: "Toca la flecha para empezar",
                    downloadCV: "Descargar CV",
                    visitButton: "Visitar",
                    projectsTitle: "Proyectos",
                    aboutTitle: "Sobre mí",
                    experienceTitle: "Experiencia",
                    fundflowDescription: "Una plataforma de crowdfunding donde todo el mundo puede financiar sus propios proyectos. Hecho como proyecto final de mi grado.",
                    desktopfolioDescription: "Mi portfolio personal, en el estilo de un escritorio antiguo.\nInspirado en Windows 95 y 98.",
                    deltashopDescription: "Web de actividad educativa donde aprendí a usar arrays y eventListeners, entre otras cosas.\nInspirado en Undertale, un juego de Toby Fox.",
                    deltabarksDescription: "Página web hecha para un pequeño negocio que vende collares para perros y productos relacionados.",
                    canmauriDescription: "Página web hecha para un restaurante que organiza eventos y bodas. Hecha durante mis prácticas en una empresa de marketing.",
                }
            },
            ca: {
                translation: {
                    intro: "Catalan placeholder",
                    introButton: "Fes scroll cap avall o clica la fletxa per començar",
                    introButtonMobile: "Toca la fletxa per començar",
                    downloadCV: "Descarregar CV",
                    visitButton: "Visitar",
                    projectsTitle: "Projectes",
                    aboutTitle: "Sobre mi",
                    experienceTitle: "Experiència",
                    fundflowDescription: "Una plataforma de crowdfunding on tothom pot finançar els seus propis projectes. Fet com a projecte final del meu grau.",
                    desktopfolioDescription: "El meu portfolio personal, en l'estil d'un escriptori antic.\nInspirat en Windows 95 i 98.",
                    deltashopDescription: "Web d'activitat educativa on vaig aprendre a fer servir arrays i eventListeners, entre altres coses.\nInspirat en Undertale, un joc de Toby Fox.",
                    deltabarksDescription: "Pàgina web feta per a un petit negoci que ven collars per a gossos i productes relacionats.",
                    canmauriDescription: "Pàgina web feta per a un restaurant que organitza esdeveniments i casaments. Feta durant les meves pràctiques en una empresa de màrqueting.",
                }
            }
        }
    });
