import React from "react";
import { useState } from "react";
import ProjectModal from "./projectModal.jsx";
import LinkArrow from "../assets/icons/LinkArrow.svg";
import GithubDark from "../assets/icons/GithubDark.svg";
import { useTranslation } from "react-i18next";

function ProjectTile({ project, gridCols, gridRows }) {
    const { t } = useTranslation();
    const [modalOpen, setModalOpen] = useState(false);
    const screenWidth = window.innerWidth;

    const handleOpenModal = () => {
        if (screenWidth >= 1080) {
            window.open(project.link, '_blank');
        } else {
            setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const openGithubRep = (event) => {
        event.stopPropagation();
        window.open(project.github, '_blank');
    };

    const gridStyle = window.innerWidth >= 1080 ? {
        gridColumn: `span ${gridCols}`,
        gridRow: `span ${gridRows}`
    } : {};

    return (
        <div onClick={handleOpenModal} className="cursor-pointer flex flex-col w-full h-40 lg:h-full overflow-hidden relative group" style={{...gridStyle, animationDelay: (screenWidth <= 600) ? `${project.animDelayMobile}` : `${project.animationDelay}`}}>
            <div className="flex flex-col w-full h-40 lg:h-full rounded-lg brightness-90 lg:group-hover:brightness-[.25] transition duration-300 bg-cover bg-center" 
            style={{ backgroundImage: (screenWidth <= 1080) ? `url(${project.coverMobile})` : `url(${project.coverPC})`}}>
                {modalOpen && <ProjectModal project={project} onClose={handleCloseModal} screenWidth={screenWidth}/>}
            </div>
            {screenWidth >= 1080 &&
            <>
                <img src={LinkArrow} alt="Link Arrow" className="h-10 w-10 absolute top-3 right-3 transform -translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300"/>
                <div className="absolute bottom-3 left-3 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 w-full">
                    <h1 className="text-3xl font-poppins text-white">{project.title}</h1>
                    <p className="text-md font-dmsans w-10/12 text-white whitespace-pre-line">{t(project.description)}</p>
                    <div className="flex gap-2 mt-1.5">
                        {project.tech.map((tech, index) => (
                            <p key={index} className="text-sm font-semibold font-dmsans text-black bg-gray-200 px-2.5 py-1.5 rounded-3xl">{tech}</p>
                        ))}
                    </div>
                </div>
                {project.github &&
                <button onClick={openGithubRep} className="">
                    <img src={GithubDark} alt="Github" className="h-10 w-10 absolute bottom-3 right-3 transform hover:scale-[1.15] translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300"/>
                </button>                
                }
            </>
            }
        </div>
    );
}

export default ProjectTile;