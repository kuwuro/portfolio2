import React from "react";
import { useState } from "react";
import ProjectModal from "./projectModal.jsx";

function ProjectTile({ project, gridCols, gridRows }) {
    const [modalOpen, setModalOpen] = useState(false);
    const screenWidth = window.innerWidth;

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const gridStyle = window.innerWidth >= 1080 ? {
        gridColumn: `span ${gridCols}`,
        gridRow: `span ${gridRows}`
    } : {};

    return (
        <div onClick={handleOpenModal} className="cursor-pointer flex flex-col w-full h-40 lg:h-full rounded-lg hover:scale-[1.015] transition duration-200 bg-cover bg-center" 
        style={{...gridStyle, backgroundImage: (screenWidth <= 600) ? `url(${project.coverMobile})` : `url(${project.coverPC})`, animationDelay: (screenWidth <= 600) ? `${project.animDelayMobile}` : `${project.animationDelay}`}}>
            {modalOpen && <ProjectModal project={project} onClose={handleCloseModal} screenWidth={screenWidth}/>}
        </div>
    );
}

export default ProjectTile;