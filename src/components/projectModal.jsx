import React from "react";
import Modal from "./modal.jsx";

function ProjectModal({ project, onClose }) {
    return (
        <Modal onClose={onClose}>
            <div className="flex flex-col gap-5">
                <img src={project.img} alt={project.title} className="rounded-lg shadow-lg h-52 w-52"/>
                <h1 className="text-3xl font-poppins dark:text-white">{project.title}</h1>
                <p className="text-lg dark:text-white">{project.description}</p>
                <div className="flex gap-2">
                    {project.tech.map((tech, index) => (
                        <p key={index} className="text-sm dark:text-white bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded-lg">{tech}</p>
                    ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500">{project.link}</a>
            </div>
        </Modal>
    );
}

export default ProjectModal;