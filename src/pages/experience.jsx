import React from "react";
import cpp from "../assets/media/logos/cpp.svg";
import css from "../assets/media/logos/css3.svg";
import docker from "../assets/media/logos/docker.svg";
import express from "../assets/media/logos/express.svg";
import figma from "../assets/media/logos/figma.svg";
import git from "../assets/media/logos/git.svg";
import github from "../assets/media/logos/github.svg";
import html from "../assets/media/logos/html5.svg";
import js from "../assets/media/logos/js.svg";
import mysql from "../assets/media/logos/mysql.svg";
import node from "../assets/media/logos/node.svg";
import photoshop from "../assets/media/logos/photoshop.svg";
import php from "../assets/media/logos/php.svg";
import reactIcon from "../assets/media/logos/react.svg";
import tailwind from "../assets/media/logos/tailwind.svg";
import wordpress from "../assets/media/logos/wordpress.svg";
import { useTranslation } from "react-i18next";

function Experience({ darkMode }) {
    const screenWidth = window.innerWidth;
    const { t } = useTranslation();
    return (
        <div className="lg:mx-12 mx-8 lg:my-36 my-24 flex flex-col lg:gap-8 gap-4 justify-start items-start lg:overflow-visible overflow-auto" style={{ height: `${screenWidth < 1080 ? '100vh' : '77vh'}` }}>
            <h1 className="lg:hidden block text-4xl font-poppins dark:text-white">{t('experienceTitle')}</h1>
            <div className="grid lg:grid-cols-5 grid-cols-1 gap-2 w-full h-full">
                <div className="flex gap-4 justify-center items-start col-span-3 lg:overflow-auto h-full">
                    <div className="lg:block hidden w-1.5 lg:ml-0.5 h-full rounded-3xl bg-black opacity-90 dark:bg-white extend">
                    </div>
                    <div className="w-full h-full flex flex-col lg:gap-4 gap-6 justify-between">
                        <div className={`${screenWidth < 1080 ? 'fade-up-text' : 'fade-right'} flex flex-col lg:gap-0 gap-2`} style={{animationDelay: '0s'}}>
                            <p className="font-dmsans text-sm text-black dark:text-white">{t('freelanceDate')}</p>
                            <h2 className="font-dmsans font-bold lg:text-3xl text-2xl text-black dark:text-white">{t('freelance')}</h2>
                            <p className="lg:w-6/12 font-dmsans text-md text-black dark:text-white">{t('freelanceText')}</p>
                            <div className="flex flex-wrap gap-2 w-full lg:mt-1.5 text-sm font-semibold font-dmsans dark:text-white">     
                                <p className="bg-black text-white dark:bg-white dark:text-black px-2.5 py-1.5 rounded-3xl">{t('allmentioned')}</p>   
                                <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Next.js</p>      
                                <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">TypeScript</p>
                                <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Python</p>
                            </div>
                        </div>
                        <div className={`${screenWidth < 1080 ? 'fade-up-text' : 'fade-right'} w-full flex lg:flex-row flex-col lg:gap-12 gap-6`} style={{animationDelay: '0.2s'}}>
                            <div className="w-full h-full flex flex-col lg:gap-0 gap-2">
                                <p className="font-dmsans text-sm text-black dark:text-white">{t('cfgsDate')}</p>
                                <h2 className="font-dmsans font-bold lg:text-3xl text-2xl text-black dark:text-white">{t('cfgs')}</h2>
                                <p className="font-dmsans text-md text-black dark:text-white">{t('cfgsText')}</p>
                                <div className="flex flex-wrap gap-2 w-full lg:mt-1.5 text-sm font-semibold font-dmsans dark:text-white">
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">React</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Node.js</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Express</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">HTML</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">XML</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">TailwindCSS</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">JavaScript</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">MySQL</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">PHP</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">C++</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Java</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Figma</p>
                                </div>
                            </div>    
                            <div className={`${screenWidth < 1080 ? 'fade-up-text' : 'fade-right'} w-full h-full flex flex-col lg:gap-0 gap-2`} style={{animationDelay: '0.4s'}}>
                                <p className="font-dmsans text-sm text-black dark:text-white">{t('ideariumDate')}</p>
                                <h2 className="font-dmsans font-bold lg:text-3xl text-2xl text-black dark:text-white">{t('idearium')}</h2>
                                <p className="font-dmsans text-md text-black dark:text-white">{t('ideariumText')}</p>
                                <div className="flex flex-wrap gap-2 w-full lg:mt-1.5 text-sm font-semibold font-dmsans dark:text-white">
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">WordPress</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">PHP</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">MySQL</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Google Analytics</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Marketing</p>
                                </div>
                            </div>
                                                    
                        </div>     
                        <div className={`${screenWidth < 1080 ? 'fade-up-text' : 'fade-right'} w-full flex lg:flex-row flex-col lg:gap-12 gap-6`} style={{animationDelay: '0.6s'}}>
                            <div className="w-full h-full flex flex-col lg:gap-0 gap-2">
                                <p className="font-dmsans text-sm text-black dark:text-white">{t('cfgmDate')}</p>
                                <h2 className="font-dmsans font-bold lg:text-3xl text-2xl text-black dark:text-white">{t('cfgm')}</h2>
                                <p className="font-dmsans text-md text-black dark:text-white">{t('cfgmText')}</p>
                                <div className="flex flex-wrap gap-2 w-full lg:mt-1.5 text-sm font-semibold font-dmsans dark:text-white">
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">HTML</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">CSS</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Windows Server</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Ubuntu</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Networks</p>
                                </div>
                            </div>
                            <div className={`${screenWidth < 1080 ? 'fade-up-text' : 'fade-right'} w-full h-full flex flex-col lg:gap-0 gap-2`} style={{animationDelay: '0.8s'}}>
                                <p className="font-dmsans text-sm text-black dark:text-white">{t('onlinevallesDate')}</p>
                                <h2 className="font-dmsans font-bold lg:text-3xl text-2xl text-black dark:text-white">{t('onlinevalles')}</h2>
                                <p className="font-dmsans text-md text-black dark:text-white">{t('onlinevallesText')}</p>
                                <div className="flex flex-wrap gap-2 w-full lg:mt-1.5 text-sm font-semibold font-dmsans dark:text-white">
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">WordPress</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">HTML</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Photoshop</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Article writing</p>
                                </div>
                            </div>   
                        </div>                                      
                    </div>
                </div>
                <div className="flex justify-center items-center col-span-2">
                    <div className="w-full h-full flex flex-col md:items-center items-start justify-center lg:mb-0 lg:mt-0 mt-6 mb-72">
                        <h2 className="md:hidden font-dmsans text-lg font-bold text-black dark:text-white mb-3 fade-up">{t('tools')}</h2>
                        <div className="grid grid-cols-4 lg:gap-4 gap-2 font-dmsans text-md font-bold">
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={reactIcon} alt="React" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">React</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={node} alt="Node.js" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">Node.js</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={html} alt="HTML" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">HTML</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={express} alt="Express" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">Express</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={js} alt="JavaScript" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">JavaScript</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={tailwind} alt="TailwindCSS" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">TailwindCSS</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={docker} alt="Docker" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">Docker</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={mysql} alt="MySQL" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">MySQL</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={php} alt="PHP" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">PHP</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={css} alt="CSS" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">CSS</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={github} alt="GitHub" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">GitHub</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={git} alt="Git" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">Git</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={figma} alt="Figma" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">Figma</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={cpp} alt="C++" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">C++</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={wordpress} alt="WordPress" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">WordPress</p>
                            </div>
                            <div className="lg:w-24 w-20 lg:h-24 h-20 bg-white dark:bg-black rounded-3xl flex items-center justify-center relative group fade-up" style={{animationDelay: `${Math.random().toFixed(2)}s`}}>
                                <img src={photoshop} alt="Photoshop" className="lg:w-24 w-20 lg:h-24 h-20 group-hover:brightness-50 transition-all duration-200" />
                                <p className="absolute opacity-0 group-hover:opacity-100 select-none text-white transition-all duration-200">Photoshop</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;