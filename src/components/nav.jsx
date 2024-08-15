import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Nav({ currentTab, setCurrentTab }) {
    const { t } = useTranslation();

    useEffect(() => {
        setCurrentTab(currentTab);
    }, [currentTab, setCurrentTab]);
    
    return (
        <nav>
            <ul id="nav" className="flex items-center justify-center font-dmsans font-bold text-md dark:text-white text-black">
                {currentTab === "projects" ? (
                    <li className="bg-white50 py-2 px-5 rounded-3xl transition duration-300">
                        <button onClick={() => setCurrentTab("projects")}>{t('projectsTitle')}</button>
                    </li>
                ) : (
                    <li className="bg-transparent py-2 px-5 rounded-3xl transition duration-300">
                        <button onClick={() => setCurrentTab("projects")}>{t('projectsTitle')}</button>
                    </li>
                )}
                {currentTab === "about" ? (
                    <li className="bg-white50 py-2 px-5 rounded-3xl transition duration-300">
                        <button onClick={() => setCurrentTab("about")}>{t('aboutTitle')}</button>
                    </li>
                ) : (
                    <li className="bg-transparent py-2 px-5 rounded-3xl transition duration-300">
                        <button onClick={() => setCurrentTab("about")}>{t('aboutTitle')}</button>
                    </li>
                )}
                {currentTab === "experience" ? (
                    <li className="bg-white50 py-2 px-5 rounded-3xl transition duration-300">
                        <button onClick={() => setCurrentTab("experience")}>{t('experienceTitle')}</button>
                    </li>
                ) : (
                    <li className="bg-transparent py-2 px-5 rounded-3xl transition duration-300">
                        <button onClick={() => setCurrentTab("experience")}>{t('experienceTitle')}</button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Nav;
