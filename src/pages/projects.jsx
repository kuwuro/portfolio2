import React from "react";
import ProjectTile from "../components/projectTile";
import { useTranslation } from "react-i18next";

const projects = [
    {
        animationDelay: '0.1s',
        animDelayMobile: '0.1s',
        title: 'project1',
        description: 'project1Description',
        coverPC: 'https://www.enricarmengol.com/projectPictures/fundflow/fundflowPC.png',
        coverMobile: "https://www.enricarmengol.com/projectPictures/fundflow/fundflowMobile.png",
        link: 'project1Link',
        tech: ['tech1', 'tech2', 'tech3']
    },
    {
        animationDelay: '0.2s',
        animDelayMobile: '0.2s',
        title: 'project2',
        description: 'project2Description',
        coverPC: 'https://images.unsplash.com/photo-1723242015501-2a52cfb64ed9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        coverMobile: "https://images.unsplash.com/photo-1723242015501-2a52cfb64ed9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: 'project2Link',
        tech: ['tech1', 'tech2', 'tech3']
    },
    {
        animationDelay: '0.5s',
        animDelayMobile: '0.3s',
        title: 'project3',
        description: 'project3Description',
        coverPC: 'https://images.unsplash.com/photo-1723242017539-39cd15eb75fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        coverMobile: "https://images.unsplash.com/photo-1723242017539-39cd15eb75fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: 'project3Link',
        tech: ['tech1', 'tech2', 'tech3']
    },
    {
        animationDelay: '0.3s',
        animDelayMobile: '0.4s',
        title: 'project4',
        description: 'project4Description',
        coverPC: 'https://images.unsplash.com/photo-1721225643686-cafccc8ba6f6?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        coverMobile: "https://images.unsplash.com/photo-1721225643686-cafccc8ba6f6?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: 'project4Link',
        tech: ['tech1', 'tech2', 'tech3']
    },
    {
        animationDelay: '0.6s',
        animDelayMobile: '0.5s',
        title: 'project5',
        description: 'project5Description',
        coverPC: 'https://images.unsplash.com/photo-1722608274454-699ed706d7f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        coverMobile: "https://images.unsplash.com/photo-1722608274454-699ed706d7f5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: 'project5Link',
        tech: ['tech1', 'tech2', 'tech3']
    },
    {
        animationDelay: '0.4s',
        animDelayMobile: '0.6s',
        title: 'project6',
        description: 'project6Description',
        coverPC: 'https://images.unsplash.com/photo-1723297503507-7049305a3f06?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        coverMobile: "https://images.unsplash.com/photo-1723297503507-7049305a3f06?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        link: 'project6Link',
        tech: ['tech1', 'tech2', 'tech3']
    }
];

function Projects({ darkMode }) {
    const { t } = useTranslation();
    return (
        <div className="lg:mx-12 mx-8 lg:my-36 my-28 flex flex-col gap-8 justify-start items-start" style={{ height: `80vh` }}>
            <h1 className="text-5xl font-poppins dark:text-white">{t('projectsTitle')}</h1>
            <div id="gridTiles" className="grid lg:grid-rows-5 grid-cols-1 lg:grid-cols-6 gap-3 w-full lg:overflow-visible overflow-auto lg:mb-0 mb-8" style={{ height: `${window.innerWidth < 1080 ? 'auto' : '75vh'}` }}>
                <ProjectTile project={projects[0]} gridCols={2} gridRows={5} style={{ animationDelay: `0.1s` }}/>
                <ProjectTile project={projects[1]} gridCols={2} gridRows={2} style={{ animationDelay: `0.1s` }}/>
                <ProjectTile project={projects[2]} gridCols={2} gridRows={3} style={{ animationDelay: `0.1s` }}/>
                <ProjectTile project={projects[3]} gridCols={2} gridRows={2} style={{ animationDelay: `0.1s` }}/>
                <ProjectTile project={projects[4]} gridCols={2} gridRows={1} style={{ animationDelay: `0.1s` }}/>
                <ProjectTile project={projects[5]} gridCols={4} gridRows={1} style={{ animationDelay: `0.1s` }}/>
            </div>
        </div>
    );
}

export default Projects;