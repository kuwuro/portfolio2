import React from "react";
import Modal from "./modal.jsx";
import { useTranslation } from "react-i18next";
import LangIconDark from "../assets/icons/BxWorldDark.svg";
import LangIconLight from "../assets/icons/BxWorldLight.svg";
import i18n from 'i18next';
import { useState } from 'react';

const lngs = {
    en: { nativeName: "ENG" },
    es: { nativeName: "ESP" },
    ca: { nativeName: "CAT" },
};

function ProjectModal({ project, onClose, screenWidth }) {
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };
    const { t } = useTranslation();
    return (
        <Modal onClose={onClose}>
            {(screenWidth <= 600) ? (
                <div className="flex flex-col gap-5 w-auto">
                    <div className="flex justify-start items-center gap-5 font-dmsans font-bold">
                        {Object.keys(lngs).map((lng) => (
                            <button
                                key={lng}
                                onClick={() => handleLanguageChange(lng)}
                                className="text-black dark:text-white"
                            >
                                {selectedLanguage === lng ? (<span className="underline">{lngs[lng].nativeName}</span>) : (lngs[lng].nativeName)}
                            </button>
                        ))}
                    </div>
                    <div className="w-full bg-cover bg-center rounded-lg shadow-xl" style={{ height: "300px", backgroundImage: `url(${project.coverPC})`}}></div>
                    <h1 className="text-3xl font-poppins dark:text-white">{project.title}</h1>
                    <p className="text-lg dark:text-white">{t(project.description)}</p>
                    <div className="flex gap-2">
                        {project.tech.map((tech, index) => (
                            <p key={index} className="text-sm dark:text-white bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-lg">{tech}</p>
                        ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500">{project.link}</a>
                </div>
            ) : (
                <div className="flex flex-col gap-5" style={{ width: "500px" }}>
                    <div className="flex justify-start items-center gap-5 font-dmsans font-bold">
                        {Object.keys(lngs).map((lng) => (
                            <button
                                key={lng}
                                onClick={() => handleLanguageChange(lng)}
                                className="text-black dark:text-white"
                            >
                                {selectedLanguage === lng ? (<span className="underline">{lngs[lng].nativeName}</span>) : (lngs[lng].nativeName)}
                            </button>
                        ))}
                    </div>
                    <div className="w-full bg-cover bg-center rounded-lg shadow-xl" style={{ height: "300px", backgroundImage: `url(${project.coverPC})`}}></div>
                    <h1 className="text-3xl font-poppins dark:text-white">{project.title}</h1>
                    <p className="text-lg dark:text-white">{t(project.description)}</p>
                    <div className="flex gap-2">
                        {project.tech.map((tech, index) => (
                            <p key={index} className="text-sm dark:text-white bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-lg">{tech}</p>
                        ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500">{project.link}</a>
                </div>
            )}
        </Modal>
    );
}

export default ProjectModal;