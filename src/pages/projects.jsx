import React from "react";
import ProjectTile from "../components/projectTile";
import { useTranslation } from "react-i18next";

const projects = [
    {
        animationDelay: '0.1s',
        animDelayMobile: '0.1s',
        title: 'fundflow',
        description: 'fundflowDescription',
        coverPC: 'https://www.enricarmengol.com/projectPictures/fundflow/fundflowPC.png',
        coverMobile: "https://www.enricarmengol.com/projectPictures/fundflow/fundflowMobile.png",
        link: 'https://fundflow.arcedo.dev',
        tech: ['tech1', 'tech2', 'tech3']
    },
    {
        animationDelay: '0.2s',
        animDelayMobile: '0.2s',
        title: 'DeltaShop',
        description: 'project2Description',
        coverPC: 'https://www.enricarmengol.com/projectPictures/deltashop/deltashopMobile1.png',
        coverMobile: "https://www.enricarmengol.com/projectPictures/deltashop/deltashopMobile1.png",
        link: 'https://kuwuro.github.io/deltashop/',
        tech: ['tech1', 'tech2', 'tech3']
    },
    {
        animationDelay: '0.5s',
        animDelayMobile: '0.4s',
        title: 'Desktopfolio',
        description: 'project3Description',
        coverPC: 'https://www.enricarmengol.com/projectPictures/desktopfolio/desktopfolioPC1.png',
        coverMobile: "https://www.enricarmengol.com/projectPictures/desktopfolio/desktopfolioMobile.png",
        link: 'https://portfolio-desktop-navy.vercel.app',
        tech: ['tech1', 'tech2', 'tech3']
    },
    {
        animationDelay: '0.3s',
        animDelayMobile: '0.5s',
        title: 'Delta Bark\'s',
        description: 'project4Description',
        coverPC: 'https://www.enricarmengol.com/projectPictures/deltabarks/deltabarksPC3.png',
        coverMobile: "https://www.enricarmengol.com/projectPictures/deltabarks/deltabarksPC3.png",
        link: 'https://deltabarks.com',
        tech: ['tech1', 'tech2', 'tech3']
    },
    {
        animationDelay: '0.4s',
        animDelayMobile: '0.3s',
        title: 'Can Mauri',
        description: 'project6Description',
        coverPC: 'https://www.enricarmengol.com/projectPictures/canmauri/canmauriPC1.png',
        coverMobile: "https://www.enricarmengol.com/projectPictures/canmauri/canmauriMobile1.png",
        link: 'https://canmauri.com',
        tech: ['tech1', 'tech2', 'tech3']
    }
];

function Projects({ darkMode }) {
    const screenWidth = window.innerWidth;
    const { t } = useTranslation();
    return (
        <div className="lg:mx-12 mx-8 lg:my-36 my-24 flex flex-col lg:gap-8 gap-4 justify-start items-start" style={{ height: `${screenWidth < 1080 ? '73vh' : '80vh'}` }}>
            <h1 className="lg:text-5xl text-4xl font-poppins dark:text-white">{t('projectsTitle')}</h1>
            <div id="gridTiles" className="grid lg:grid-rows-5 grid-cols-1 lg:grid-cols-6 gap-3 w-full lg:overflow-visible overflow-auto overflow-x-hidden lg:mb-0 mb-8" style={{ height: `${window.innerWidth < 1080 ? 'auto' : '75vh'}` }}>
                <ProjectTile project={projects[0]} gridCols={2} gridRows={5}/>
                <ProjectTile project={projects[1]} gridCols={2} gridRows={3}/>
                <ProjectTile project={projects[4]} gridCols={2} gridRows={2}/>
                <ProjectTile project={projects[2]} gridCols={2} gridRows={3}/>
                <ProjectTile project={projects[3]} gridCols={2} gridRows={2}/>
            </div>
        </div>
    );
}

export default Projects;