import React from "react";
import { useState } from "react";
import ProjectModal from "./projectModal.jsx";

function ProjectTile({ project, gridCols, gridRows }) {
    const [modalOpen, setModalOpen] = useState(false);

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
        <div onClick={handleOpenModal} className="cursor-pointer flex flex-col w-full h-28 lg:h-full rounded-lg brightness-75 hover:brightness-100 transition duration-200 bg-cover bg-center" style={{...gridStyle, backgroundImage: `url(${project.img})`}}>
            {modalOpen && <ProjectModal project={project} onClose={handleCloseModal} />}
        </div>
    );
}

export default ProjectTile;