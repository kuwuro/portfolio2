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
        tech: ['React', 'TailwindCSS', 'Node.js', 'Express'],
        github: 'https://github.com/kuwuro/fundflow-Frontend'
    },
    {
        animationDelay: '0.5s',
        animDelayMobile: '0.4s',
        title: 'DeltaShop',
        description: 'deltashopDescription',
        coverPC: 'https://www.enricarmengol.com/projectPictures/deltashop/deltashopMobile1.png',
        coverMobile: "https://www.enricarmengol.com/projectPictures/deltashop/deltashopMobile1.png",
        link: 'https://kuwuro.github.io/deltashop/',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/kuwuro/deltashop'
    },
    {
        animationDelay: '0.2s',
        animDelayMobile: '0.2s',
        title: 'Desktopfolio',
        description: 'desktopfolioDescription',
        coverPC: 'https://www.enricarmengol.com/projectPictures/desktopfolio/desktopfolioPC1.png',
        coverMobile: "https://www.enricarmengol.com/projectPictures/desktopfolio/desktopfolioMobile.png",
        link: 'https://portfolio-desktop-navy.vercel.app',
        tech: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/kuwuro/portfolioDesktop'
    },
    {
        animationDelay: '0.4s',
        animDelayMobile: '0.3s',
        title: 'Delta Bark\'s',
        description: 'deltabarksDescription',
        coverPC: 'https://www.enricarmengol.com/projectPictures/deltabarks/deltabarksPC3.png',
        coverMobile: "https://www.enricarmengol.com/projectPictures/deltabarks/deltabarksPC3.png",
        link: 'https://deltabarks.com',
        tech: ['WordPress', 'PHP', 'MySQL']
    },
    {
        animationDelay: '0.3s',
        animDelayMobile: '0.5s',
        title: 'Can Mauri',
        description: 'canmauriDescription',
        coverPC: 'https://www.enricarmengol.com/projectPictures/canmauri/canmauriPC1.png',
        coverMobile: "https://www.enricarmengol.com/projectPictures/canmauri/canmauriMobile1.png",
        link: 'https://canmauri.com',
        tech: ['WordPress', 'PHP', 'MySQL']
    }
];

function Projects({ darkMode }) {
    const screenWidth = window.innerWidth;
    const { t } = useTranslation();
    return (
        <div className="lg:mx-12 mx-8 lg:my-36 my-24 flex flex-col lg:gap-8 gap-4 justify-start items-start lg:overflow-visible overflow-auto overflow-x-hidden" style={{ height: `${screenWidth < 1080 ? '100vh' : '77vh'}` }}>
            <h1 className="lg:text-5xl text-4xl font-poppins dark:text-white">{t('projectsTitle')}</h1>
            <div id="gridTiles" className="grid lg:grid-rows-5 grid-cols-1 lg:grid-cols-6 gap-3 w-full lg:mb-0 mb-52" style={{ height: `${window.innerWidth < 1080 ? 'auto' : '75vh'}` }}>
                <ProjectTile project={projects[0]} gridCols={2} gridRows={5}/>
                <ProjectTile project={projects[2]} gridCols={2} gridRows={3}/>
                <ProjectTile project={projects[3]} gridCols={2} gridRows={2}/>
                <ProjectTile project={projects[1]} gridCols={2} gridRows={3}/>
                <ProjectTile project={projects[4]} gridCols={2} gridRows={2}/>
            </div>
        </div>
    );
}

export default Projects;