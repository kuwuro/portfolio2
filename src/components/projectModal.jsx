import React from "react";
import Modal from "./modal.jsx";
import LinkArrow from "../assets/icons/LinkArrowLight.svg";
import GithubDark from "../assets/icons/GithubDark.svg";
import { useTranslation } from "react-i18next";

function ProjectModal({ project, onClose, screenWidth }) {
    const visitSite = () => {
        window.open(project.link, '_blank');
    };

    const openGithubRep = () => {
        window.open(project.github, '_blank');
    };

    const { t } = useTranslation();
    return (
        <Modal onClose={onClose}>
            {(screenWidth <= 1080) ? (
                <div className="flex flex-col gap-5 w-auto">
                    <h1 className="text-3xl font-poppins dark:text-white">{project.title}</h1>
                    <div className="w-full h-40 bg-cover bg-center rounded-lg shadow-xl" style={{ backgroundImage: `url(${project.coverMobile})`}}></div>
                    <p className="text-md font-dmsans dark:text-white">{t(project.description)}</p>
                    <div className="flex flex-wrap gap-2 w-full">
                        {project.tech.map((tech, index) => (
                            <p key={index} className="text-sm font-semibold font-dmsans dark:text-white bg-gray-300 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">{tech}</p>
                        ))}
                    </div>
                    {project.github ? (
                        <div className="w-full flex gap-2 mb-3">
                            <button onClick={visitSite} className="flex items-center justify-center gap-1 w-full py-2.5 rounded-3xl bg-gradient-to-tr from-primary to-secondary">
                                <p className="font-dmsans font-bold">{t("visitButton")}</p>
                                <img src={LinkArrow} alt="Link Arrow" className="w-7 h-7"/>
                            </button>
                            <button onClick={openGithubRep} className="flex items-center justify-center gap-2 w-full border-2 border-transparent dark:border-white20 bg-black text-white py-2.5 rounded-3xl">
                                <p className="font-dmsans font-bold">GitHub</p>
                                <img src={GithubDark} alt="GitHub Logo" className="w-7 h-7"/>
                            </button>                        
                        </div>
                    ) : (
                        <button onClick={visitSite} className="mb-3 flex items-center justify-center gap-1 w-full py-2.5 rounded-3xl bg-gradient-to-tr from-primary to-secondary">
                            <p className="font-dmsans font-bold">{t("visitButton")}</p>
                            <img src={LinkArrow} alt="Link Arrow" className="w-7 h-7"/>
                        </button>
                    )}
                </div>
            ) : ("")}
        </Modal>
    );
}

export default ProjectModal;