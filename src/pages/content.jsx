import React from "react";
import Projects from "./projects";
import About from "./about";
import Experience from "./experience";

function Content({ darkMode, currentTab, setCurrentTab }) {    
    if (currentTab === 'projects') {
        document.getElementById('about').classList.add('transition-down');
        document.getElementById('experience').classList.add('transition-down');
        setTimeout(() => {
            document.getElementById('about').classList.add('hidden');
            document.getElementById('experience').classList.add('hidden');
            document.getElementById('about').classList.add('opacity-0');
            document.getElementById('experience').classList.add('opacity-0');
            setTimeout(() => {
                document.getElementById('about').classList.remove('transition-down');
                document.getElementById('experience').classList.remove('transition-down');
            }, 700);
            document.getElementById('projects').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('projects').classList.remove('opacity-0');
            }, 100);
        }, 500);
    } else if (currentTab === 'about') {
        document.getElementById('projects').classList.add('transition-down');
        document.getElementById('experience').classList.add('transition-down');
        setTimeout(() => {
            document.getElementById('projects').classList.add('hidden');
            document.getElementById('experience').classList.add('hidden');
            document.getElementById('projects').classList.add('opacity-0');
            document.getElementById('experience').classList.add('opacity-0');
            setTimeout(() => {
                document.getElementById('projects').classList.remove('transition-down');
                document.getElementById('experience').classList.remove('transition-down');
            }, 700);
            document.getElementById('about').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('about').classList.remove('opacity-0');
            }, 100);
        }, 500);
    } else if (currentTab === 'experience') {
        document.getElementById('projects').classList.add('transition-down');
        document.getElementById('about').classList.add('transition-down');
        setTimeout(() => {
            document.getElementById('projects').classList.add('hidden');
            document.getElementById('about').classList.add('hidden');
            document.getElementById('projects').classList.add('opacity-0');
            document.getElementById('about').classList.add('opacity-0');
            setTimeout(() => {
                document.getElementById('projects').classList.remove('transition-down');
                document.getElementById('about').classList.remove('transition-down');
            }, 700);
            document.getElementById('experience').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('experience').classList.remove('opacity-0');
            }, 100);
        }, 500);
    }

    return (
        <div>
            <div id="projects">
                <Projects darkMode={darkMode}/>
            </div>
            <div id="about" className="hidden">
                <About darkMode={darkMode}/>
            </div>
            <div id="experience" className="hidden">
                <Experience darkMode={darkMode}/>
            </div>
        </div>
    );
}

export default Content;