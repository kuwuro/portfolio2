import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: false,
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
                    allmentioned: "All prior",
                    freelanceDate: "MAY 2021 - PRESENT",
                    ideariumDate: "JUL 2023 - FEB 2024",
                    cfgsDate: "SEP 2022 - JUN 2024",
                    onlinevallesDate: "NOV 2021 - MAY 2022",
                    cfgmDate: "SEP 2020 - JUN 2022",
                    freelance: "Freelance Web Developer",
                    idearium: "Idearium® · Internship",
                    cfgs: "CFGS DAW",
                    onlinevalles: "OnlineVallès · Internship",
                    cfgm: "CFGM SMX",
                    freelanceText: "Nowadays, I work as a freelance web developer, and I create projects that help me grow and learn new things. I'm always looking for new opportunities to work on, so if you have a project in mind, don't hesitate to get in touch me.",
                    ideariumText: "Mantained and developed new functions for a proprietary website using WordPress and PHP, while working on small tasks related to marketing and SEO.",
                    cfgsText: "Gained a deeper insight in web application development, learning new technologies and tools that would set the base for my future projects, along with my goals.",
                    onlinevallesText: "Helped with several tasks related to web development, along with writing articles and creating content for the websites.",
                    cfgmText: "Learned the basics of programming, networking and system administration, while also getting a deeper insight in the world of IT and its possibilities.",
                    "aboutMe": {
                        "part1": "I'm a recent graduate of a <1>{{bold1ENG}}</1>, with a solid technical background and a passion for web design and development. I mainly have a focus on <1>{{bold2ENG}}</1>, but my goal is to expand my knowledge to fullstack.",
                        "part2": "I've been making websites since I was 16, and this experience has helped shaping what I enjoy. I've learned that putting <1>{{bold3ENG}}</1> into my projects makes them truly shine, and that's what drives me to improve and thrive in my work.",
                        "part3": "I love cats, retro aesthetics and old internet culture! When I'm not working, I spend most of my time playing videogames, watching movies, going out with friends and investigating new tools to work with, to then include them in my daily workflow.",
                        "part4": "If you want to get in touch with me, feel free to send me an email at: <1>{{email}}</1>."
                    },
                    tools: "Tools & Technologies",
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
                    allmentioned: "Todos los anteriores",
                    freelanceDate: "MAY 2021 - PRESENTE",
                    ideariumDate: "JUL 2023 - FEB 2024",
                    cfgsDate: "SEP 2022 - JUN 2024",
                    onlinevallesDate: "NOV 2021 - MAY 2022",
                    cfgmDate: "SEP 2020 - JUN 2022",
                    freelance: "Desarrollador Web Freelance",
                    idearium: "Idearium® · Prácticas",
                    cfgs: "CFGS DAW",
                    onlinevalles: "OnlineVallés · Prácticas",
                    cfgm: "CFGM SMX",
                    freelanceText: "Actualmente trabajo como desarrollador web freelance, y creo proyectos que me ayudan a crecer y aprender cosas nuevas. Siempre estoy buscando nuevas oportunidades en las que trabajar, así que si tienes un proyecto en mente, no dudes en contactarme.",
                    ideariumText: "Mantenía y desarrollaba nuevas funciones para una web propietaria usando WordPress y PHP, mientras trabajaba en pequeñas tareas relacionadas con marketing y SEO.",
                    cfgsText: "Profundicé mis conocimientos en el desarrollo de aplicaciones web, aprendiendo nuevas tecnologías y herramientas que sentarían las bases para mis futuros proyectos.",
                    onlinevallesText: "Ayudé con varias tareas relacionadas con el desarrollo web, junto con escribir artículos y crear contenido para las webs.",
                    cfgmText: "Aprendí los conceptos básicos de programación, redes y administración de sistemas, mientras también profundizaba en el mundo de la informática y sus posibilidades.",
                    "aboutMe": {
                        "part1": "Soy recién graduado de <1>{{bold1ESP}}</1>, con una sólida formación técnica y pasión por el diseño y desarrollo web. Principalmente tengo un enfoque en <1>{{bold2ESP}}</1>, pero mi objetivo es expandir mis conocimientos al fullstack.",
                        "part2": "He estado haciendo páginas web desde los 16 años, y esta experiencia ha ayudado a definir lo que disfruto. He aprendido que los <1>{{bold3ESP}}</1> por mis proyectos los hace brillar de verdad, y eso es lo que me impulsa a mejorar y prosperar en mi trabajo.",
                        "part3": "¡Me encantan los gatos, la estética retro y la cultura antigua de internet! Cuando no estoy trabajando, paso la mayor parte de mi tiempo jugando videojuegos, viendo películas, saliendo con amigos e investigando nuevas herramientas con las que trabajar, para luego incluirlas en mi flujo de trabajo diario.",
                        "part4": "Si quieres ponerte en contacto conmigo, no dudes en enviarme un email a: <1>{{email}}</1>."
                    },
                    tools: "Herramientas y tecnologías",
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
                    allmentioned: "Tots els anteriors",
                    freelanceDate: "MAI 2021 - PRESENT",
                    ideariumDate: "JUL 2023 - FEB 2024",
                    cfgsDate: "SEP 2022 - JUN 2024",
                    onlinevallesDate: "NOV 2021 - MAI 2022",
                    cfgmDate: "SEP 2020 - JUN 2022",
                    freelance: "Desenvolupador Web Freelance",
                    idearium: "Idearium® · Pràctiques",
                    cfgs: "CFGS DAW",
                    onlinevalles: "OnlineVallès · Pràctiques",
                    cfgm: "CFGM SMX",
                    freelanceText: "Actualment treballo com a desenvolupador web freelance, i creo projectes que m'ajuden a créixer i aprendre coses noves. Sempre estic buscant noves oportunitats en les quals treballar, així que si tens un projecte en ment, no dubtis a contactar-me.",
                    ideariumText: "Mantenia i desenvolupava noves funcions per a una web pròpia fent servir WordPress i PHP, mentre treballava en petites tasques relacionades amb màrqueting i SEO.",
                    cfgsText: "Vaig aprofundir els meus coneixements en el desenvolupament d'aplicacions web, aprenent noves tecnologies i eines que marcarien les bases per als meus futurs projectes.",
                    onlinevallesText: "Vaig ajudar amb diverses tasques relacionades amb el desenvolupament web, juntament amb escriure articles i crear contingut per a les webs.",
                    cfgmText: "Vaig aprendre els conceptes bàsics de programació, xarxes i administració de sistemes, mentre també aprofundia en el món de la informàtica i les seves possibilitats.",
                    "aboutMe": {
                        "part1": "Sóc recentment graduat d'un <1>{{bold1CAT}}</1>, amb una sòlida formació tècnica i passió pel disseny i desenvolupament web. Principalment tinc un enfocament en <1>{{bold2CAT}}</1>, però el meu objectiu és expandir els meus coneixements al fullstack.",
                        "part2": "He estat fent pàgines web des dels 16 anys, i aquesta experiència m'ha ajudat a definir el que gaudeixo. He après que els <1>{{bold3CAT}}</1> pels meus projectes els fa brillar de veritat, i això és el que em impulsa a millorar i prosperar en la meva feina.",
                        "part3": "M'encanten els gats, l'estètica retro i la cultura antiga d'internet! Quan no estic treballant, passo la major part del meu temps jugant a videojocs, veient pel·lícules, sortint amb amics i investigant noves eines amb les quals treballar, per després incloure-les en el meu flux de treball diari.",
                        "part4": "Si vols posar-te en contacte amb mi, no dubtis a enviar-me un email a: <1>{{email}}</1>."
                    },
                    tools: "Eines i tecnologies",                    
                }
            }
        }
    });
