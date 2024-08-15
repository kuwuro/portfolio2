import React from "react";
import HomeIconDark from "../assets/icons/BxsHomeDark.svg";
import HomeIconLight from "../assets/icons/BxsHomeLight.svg";
import DownloadCVLight from "../assets/icons/DownloadCVLight.svg";
import DownloadCVDark from "../assets/icons/DownloadCVDark.svg";
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

function goHome() {
    const intro = document.getElementById('intro');
    const content = document.getElementById('content');
    const menu = document.getElementById('menu');
    const nav = document.getElementById('nav');
    const bgDark = document.getElementById('bgDark');
    const bgLight = document.getElementById('bgLight');
    const arrowDown = document.getElementById('arrowDown');

    content.classList.add('transition-down');
    setTimeout(() => {
        content.classList.add('hidden');
        document.getElementById('gridTiles').children[0].classList.remove('fade-left');
        document.getElementById('gridTiles').children[1].classList.remove('fade-left');
        document.getElementById('gridTiles').children[2].classList.remove('fade-left');
        document.getElementById('gridTiles').children[3].classList.remove('fade-left');
        document.getElementById('gridTiles').children[4].classList.remove('fade-left');
        document.getElementById('gridTiles').children[5].classList.remove('fade-left');
    }, 400);
    setTimeout(() => {
        bgDark.classList.remove('hidden');
        bgLight.classList.remove('hidden');
        menu.classList.add('opacity-0');
        nav.classList.add('opacity-0');
        setTimeout(() => {
            bgDark.classList.add('dark:opacity-5');
            bgLight.classList.add('opacity-40');
            intro.classList.remove('hidden');
            arrowDown.classList.remove('hidden');
            menu.classList.add('hidden');
            nav.classList.add('hidden');
            setTimeout(() => {
                intro.classList.remove('opacity-0');
                arrowDown.classList.remove('opacity-0');
                content.classList.remove('transition-down');
                content.classList.add('opacity-0');
                addEventListener('wheel', scrollDown);
            }, 800);
        }, 400);
    }, 800);
}

function cvDownload() {
    if (i18n.language === 'en' || i18n.language === 'en-US') {
        window.open('https://www.enricarmengol.com/cvs/CVEnricArmengolENG.pdf', '_blank');
    } else if (i18n.language === 'es') {
        window.open('https://www.enricarmengol.com/cvs/CVEnricArmengolESP.pdf', '_blank');
    } else if (i18n.language === 'ca') {
        window.open('https://www.enricarmengol.com/cvs/CVEnricArmengolCAT.pdf', '_blank');
    }
}

function Menu({ darkMode }) {
    const { t } = useTranslation();
    const screenWidth = window.innerWidth;
    return (
        <div className="flex items-center justify-center relative">
            <button onClick={goHome}>
                {!darkMode ? (
                    <img src={HomeIconLight} alt="Home" className="w-9 h-9 hover:scale-110 transition duration-200" />
                ) : (
                    <img src={HomeIconDark} alt="Home" className="w-9 h-9 hover:scale-110 transition duration-200" />
                )}
            </button>   
            {screenWidth >= 600 ? (
                <button onClick={cvDownload} className="absolute border-black dark:border-white w-48 left-16 border-2 rounded-lg py-2 hover:scale-105 transition duration-200 flex justify-center items-center gap-2">
                    <p className="font-dmsans font-bold text-md dark:text-white text-black">{t('downloadCV')}</p>
                    {!darkMode ? (
                        <img src={DownloadCVLight} alt="Download CV" className="w-7 h-7" />
                    ) : (
                        <img src={DownloadCVDark} alt="Download CV" className="w-7 h-7" />
                    )}
                </button>
            ) : (
                <button id="downloadCV" onClick={cvDownload} className="absolute left-16 w-20 hover:scale-105 transition duration-200">
                    {!darkMode ? (
                        <img src={DownloadCVLight} alt="Download CV" className="w-9 h-9 hover:scale-110 transition duration-200" />
                    ) : (
                        <img src={DownloadCVDark} alt="Download CV" className="w-9 h-9 hover:scale-110 transition duration-200" />
                    )}
                </button>
            )}
        </div>
    );
}

export default Menu;