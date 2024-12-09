import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Nav({ currentTab, setCurrentTab }) {
    const { t } = useTranslation();

    useEffect(() => {
        setCurrentTab(currentTab);
    }, [currentTab, setCurrentTab]);

    return (
        <nav>
            <ul id="nav" className="flex backdrop-blur-xl items-center justify-center font-dmsans font-bold gap-2 text-md rounded-3xl dark:text-white text-black">
                {currentTab === "projects" ? (
                    <li className="bg-white50 dark:bg-white20 py-2.5 px-4 rounded-3xl transition duration-300">
                        <button className="cursor-default" onClick={() => setCurrentTab("projects")}>{t('projectsTitle')}</button>
                    </li>
                ) : (
                    <li onClick={() => setCurrentTab("projects")} className="cursor-pointer bg-transparent py-2.5 px-4 hover:bg-white30 hover:dark:bg-white10 rounded-3xl transition duration-300">
                        <button>{t('projectsTitle')}</button>
                    </li>
                )}
                {window.location.hostname === "enricarmengol.com" && (currentTab === "experience" ? (
                    <li className="bg-white50 dark:bg-white20 py-2.5 px-4 rounded-3xl transition duration-300">
                        <button className="cursor-default">{t('experienceTitle')}</button>
                    </li>
                ) : (
                    <li onClick={() => setCurrentTab("experience")} className="cursor-pointer bg-transparent py-2.5 px-4 hover:bg-white30 hover:dark:bg-white10 rounded-3xl transition duration-300">
                        <button>{t('experienceTitle')}</button>
                    </li>
                ))}
                {currentTab === "about" ? (
                    <li className="bg-white50 dark:bg-white20 py-2.5 px-4 rounded-3xl transition duration-300">
                        <button className="cursor-default"><nobr>{t('aboutTitle')}</nobr></button>
                    </li>
                ) : (
                    <li onClick={() => setCurrentTab("about")} className="cursor-pointer bg-transparent py-2.5 px-4 hover:bg-white30 hover:dark:bg-white10 rounded-3xl transition duration-300">
                        <button><nobr>{t('aboutTitle')}</nobr></button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Nav;
