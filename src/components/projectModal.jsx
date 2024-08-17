import React from "react";
import Modal from "./modal.jsx";
import { useTranslation } from "react-i18next";

function ProjectModal({ project, onClose, screenWidth }) {
    const { t } = useTranslation();
    return (
        <Modal onClose={onClose}>
            {(screenWidth <= 600) ? (
                <div className="flex flex-col gap-5 w-auto">
                    <h1 className="text-3xl font-poppins dark:text-white">{project.title}</h1>
                    <div className="w-full h-40 bg-cover bg-center rounded-lg shadow-xl" style={{ backgroundImage: `url(${project.coverMobile})`}}></div>
                    <p className="text-lg dark:text-white">{t(project.description)}</p>
                    <div className="flex gap-2">
                        {project.tech.map((tech, index) => (
                            <p key={index} className="text-sm dark:text-white bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-lg">{tech}</p>
                        ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500">{project.link}</a>
                </div>
            ) : ("")}
        </Modal>
    );
}

export default ProjectModal;