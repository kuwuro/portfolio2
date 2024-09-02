import React from "react";
import { useTranslation } from "react-i18next";

function Experience({ darkMode }) {
    const screenWidth = window.innerWidth;
    const { t } = useTranslation();
    return (
        <div className="lg:mx-12 mx-8 lg:my-36 my-24 flex flex-col lg:gap-8 gap-4 justify-start items-start lg:overflow-visible overflow-auto" style={{ height: `${screenWidth < 1080 ? '100vh' : '77vh'}` }}>
            <h1 className="lg:text-5xl text-4xl font-poppins dark:text-white">{t('experienceTitle')}</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 w-full h-full">
                <div className="flex gap-4 justify-center lg:items-end items-start col-span-2">
                    <div className="w-1.5 lg:ml-0.5 h-full rounded-3xl bg-black opacity-90 dark:bg-white extend">
                    </div>
                    <div className="w-full h-full flex flex-col gap-6 justify-between">
                        <div className="fade-right flex flex-col lg:gap-0 gap-2" style={{animationDelay: `${screenWidth < 1080 ? '0s' : '0.8s'}`}}>
                            <p className="font-dmsans text-sm text-black dark:text-white">{t('freelanceDate')}</p>
                            <h2 className="font-dmsans font-bold lg:text-3xl text-4xl text-black dark:text-white">{t('freelance')}</h2>
                            <p className="lg:w-7/12 font-dmsans text-md text-black dark:text-white">{t('freelanceText')}</p>
                            <div className="flex flex-wrap gap-2 w-full lg:mt-1.5 text-sm font-semibold font-dmsans dark:text-white">
                                <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">React</p>
                                <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Node.js</p>
                                <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">TailwindCSS</p>
                                <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">HTML</p>
                                <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">JavaScript</p>
                                <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">PHP</p>
                                <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">WordPress</p>
                                <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Figma</p>
                            </div>
                        </div>
                        <div className="w-full flex lg:flex-row flex-col fade-right lg:gap-10 gap-6" style={{animationDelay: `${screenWidth < 1080 ? '0.2s' : '0.4s'}`}}>
                            <div className="w-full h-full">
                                <p className="font-dmsans text-sm">JUL 2023 - FEB 2024</p>
                                <h2 className="font-dmsans font-bold text-3xl">Idearium®</h2>
                                <p className="font-dmsans text-md text-black dark:text-white">{t('freelanceText')}</p>
                                <div className="flex flex-wrap gap-2 w-full lg:mt-1.5 text-sm font-semibold font-dmsans dark:text-white">
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">WordPress</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">PHP</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">MySQL</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Google Analytics</p>
                                </div>
                            </div>
                            <div className="w-full h-full fade-right" style={{animationDelay: `${screenWidth < 1080 ? '0.4s' : '0.6s'}`}}>
                                <p className="font-dmsans text-sm">JUL 2023 - FEB 2024</p>
                                <h2 className="font-dmsans font-bold text-3xl">CFGS DAW</h2>
                                <p className="font-dmsans text-md text-black dark:text-white">{t('freelanceText')}</p>
                                <div className="flex flex-wrap gap-2 w-full lg:mt-1.5 text-sm font-semibold font-dmsans dark:text-white">
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">WordPress</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">PHP</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">MySQL</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Google Analytics</p>
                                </div>
                            </div>                            
                        </div>     
                        <div className="w-full flex lg:flex-row flex-col fade-right lg:gap-10 gap-6" style={{animationDelay: `${screenWidth < 1080 ? '0.6s' : '0s'}`}}>
                            <div className="w-full h-full">
                                <p className="font-dmsans text-sm">JUL 2023 - FEB 2024</p>
                                <h2 className="font-dmsans font-bold text-3xl">OnlineVallès</h2>
                                <p className="font-dmsans text-md text-black dark:text-white">{t('freelanceText')}</p>
                                <div className="flex flex-wrap gap-2 w-full lg:mt-1.5 text-sm font-semibold font-dmsans dark:text-white">
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">WordPress</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">PHP</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">MySQL</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Google Analytics</p>
                                </div>
                            </div>                            
                            <div className="w-full h-full fade-right" style={{animationDelay: `${screenWidth < 1080 ? '0.8s' : '0.2s'}`}}>
                                <p className="font-dmsans text-sm">JUL 2023 - FEB 2024</p>
                                <h2 className="font-dmsans font-bold text-3xl">CFGM SMIX</h2>
                                <p className="font-dmsans text-md text-black dark:text-white">{t('freelanceText')}</p>
                                <div className="flex flex-wrap gap-2 w-full lg:mt-1.5 text-sm font-semibold font-dmsans dark:text-white">
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">WordPress</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">PHP</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">MySQL</p>
                                    <p className="bg-white50 dark:bg-white20 px-2.5 py-1.5 rounded-3xl">Google Analytics</p>
                                </div>
                            </div>
                        </div>                                      
                    </div>
                </div>
                <div className="flex justify-center items-center border rounded-3xl fade-up-flip">
                    <div className="w-full h-full flex items-center justify-center">
                        p
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;