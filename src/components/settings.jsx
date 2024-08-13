import React from "react";
import Dark from "../assets/icons/BxsMoon.svg";
import Light from "../assets/icons/BxsSun.svg";
import LangIconDark from "../assets/icons/BxWorldDark.svg";
import LangIconLight from "../assets/icons/BxWorldLight.svg";
import i18n from 'i18next';
import { useState } from 'react';

const lngs = {
    en: { nativeName: "ENG" },
    es: { nativeName: "ESP" },
    ca: { nativeName: "CAT" },
};

function Settings({ darkModeHandler, darkMode }) {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
        showLanguages();
    };
    
    function switchDarkMode() {
        darkModeHandler();
        const darkModeButton = document.getElementById('darkModeButton');
        darkModeButton.classList.add("animate-spin");
        setTimeout(() => {
            darkModeButton.classList.remove("animate-spin");
        }, 500);
    }

    function showLanguages() {
        const screenWidth = window.innerWidth;
        const languages = document.getElementById('languages');
        const downloadButton = document.getElementById('downloadCV');
        if (languages.classList.contains('hidden')) {
            if (screenWidth <= 600) {
                downloadButton.classList.add('opacity-0');
                setTimeout(() => {
                    downloadButton.classList.add('hidden');
                }, 200);
            }
            languages.classList.remove('hidden');
            setTimeout(() => {
                languages.classList.remove('translate-x-10');
                languages.classList.add('opacity-100');
            }, 50);
        } else {
            if (screenWidth <= 600) {
                downloadButton.classList.remove('hidden');
                setTimeout(() => {
                    downloadButton.classList.remove('opacity-0');
                }, 100);
            }
            languages.classList.remove('opacity-100');
            setTimeout(() => {
                languages.classList.add('translate-x-10');
                languages.classList.add('opacity-0');
            }, 50);
            setTimeout(() => {
                languages.classList.add('hidden');
            }, 200);
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center z-10">
                <div id="languages" className="hidden font-dmsans font-bold w-fit pl-5 pr-3 translate-x-10 opacity-0 transition duration-200">
                    {Object.keys(lngs).map((lng) => (
                    <button
                        key={lng}
                        onClick={() => handleLanguageChange(lng)}
                        className="hover:scale-110 transition duration-200 text-black dark:text-white lg:px-3 px-2"
                    >
                        {selectedLanguage === lng ? (<span className="underline">{lngs[lng].nativeName}</span>) : (lngs[lng].nativeName)}
                    </button>
                ))}
                </div>
                <button onClick={showLanguages}>
                    {!darkMode ? (
                        <img src={LangIconLight} alt="Language" className="w-9 h-9 hover:scale-110 transition duration-200" />
                    ) : (
                        <img src={LangIconDark} alt="Language" className="w-9 h-9 hover:scale-110 transition duration-200" />
                    )}
                </button>
                <button id="darkModeButton" onClick={switchDarkMode} className="ml-6">
                    {!darkMode ? (
                        <img src={Dark} alt="Dark Mode" className="w-9 h-9 hover:scale-110 transition duration-200" />
                    ) : (
                        <img src={Light} alt="Light Mode" className="w-9 h-9 hover:scale-110 transition duration-200" />
                    )}
                </button>
            </div>            
        </div>
    );
}

export default Settings;