import React from "react";
import me from "../assets/media/me.jpg";
import { Trans, useTranslation } from "react-i18next";

function About({ darkMode }) {
    const screenWidth = window.innerWidth;
    const { t } = useTranslation();
    return (
        <div className="lg:mx-12 mx-8 lg:my-36 my-24 flex flex-col lg:gap-8 gap-4 justify-start items-start overflow-auto" style={{ height: `${screenWidth < 1080 ? '100vh' : '85vh'}` }}>
            <div className="grid lg:grid-cols-2 w-full lg:h-full lg:mb-0 mb-60">
                <div className="flex flex-col justify-center items-center lg:mt-0 mt-5 lg:mb-0 mb-2">
                    <div className="lg:w-120 lg:h-120 w-52 h-52 rounded-full waviy border-0 z-20" style={{ backgroundImage: `url(${me})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="w-2/5 h-10 bg-black blur-2xl rounded-full z-10"></div>
                </div>
                <div className="flex flex-col justify-center items-start gap-2 lg:-ml-20 -ml-0 lg:w-4/5">
                    <h2 className="lg:text-7xl text-4xl font-poppins dark:text-white fade-up-text lg:mb-2 lg:-ml-1" style={{ animationDelay: (screenWidth <= 1080) ? `0.3s` : `0s` }}>ENRIC ARMENGOL</h2>
                    <p className="font-dmsans dark:text-white fade-up-text w-full" style={{ animationDelay: (screenWidth <= 1080) ? `0.4s` : `0.1s` }}>
                        <Trans
                            i18nKey="aboutMe.part1"
                            components={{ 1: <strong /> }}
                            values={{
                                bold1ENG: 'Superior Grade in Web Application Development (DAW)',
                                bold1ESP: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
                                bold1CAT: "Grau Superior de Desenvolupament d`Aplicacions Web (DAW)",
                                bold2ENG: 'design and front-end',
                                bold2ESP: 'diseño y front-end',
                                bold2CAT: 'disseny i front-end',
                            }}
                        />
                    </p>
                    <p className="font-dmsans dark:text-white fade-up-text w-full" style={{ animationDelay: (screenWidth <= 1080) ? `0.5s` : `0.2s` }}>
                        <Trans
                            i18nKey="aboutMe.part2"
                            components={{ 1: <strong /> }}
                            values={{
                                bold3ENG: 'care and passion',
                                bold3ESP: 'pequeños detalles y la pasión',
                                bold3CAT: 'petits detalls i la passió'
                            }}
                        />
                    </p>
                    <p className="font-dmsans dark:text-white fade-up-text w-full" style={{ animationDelay: (screenWidth <= 1080) ? `0.6s` : `0.3s` }}>
                        {t('aboutMe.part3')}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
