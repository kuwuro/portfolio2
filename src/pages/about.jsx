import React from "react";
import mii1 from "../assets/media/mii1.png";
import mii2 from "../assets/media/mii2.png";
import mii3 from "../assets/media/mii3.png";
import mii4 from "../assets/media/mii4.png";
import { useTranslation } from "react-i18next";

function About({ darkMode }) {
    const screenWidth = window.innerWidth;
    const { t } = useTranslation();
    return (
        <div className="lg:mx-12 mx-8 lg:my-36 my-24 flex flex-col lg:gap-8 gap-4 justify-start items-start" style={{ height: `${screenWidth < 1080 ? '73vh' : '83vh'}` }}>
            {/* <h1 className="lg:text-5xl text-4xl font-poppins dark:text-white">{t('aboutTitle')}</h1> */}
            <div className="grid lg:grid-cols-2 w-full lg:h-full">
                <div className="flex flex-col justify-center items-start">
                    <h2 className="text-5xl font-poppins dark:text-white fade-up-text" style={{animationDelay: (screenWidth <= 1080) ? `0.8s` : `0s`}}>ENRIC ARMENGOL</h2>
                    <p className="font-dmsans dark:text-white fade-up-text" style={{animationDelay: (screenWidth <= 1080) ? `0.9s` : `0.1s`}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas non nemo voluptatum ipsa cupiditate porro vero. Laboriosam fuga tempore harum deserunt, consequuntur vitae, atque quos asperiores dolorem provident expedita assumenda.</p>
                </div>
                <div className="flex justify-center items-center lg:order-last order-first lg:gap-8 gap-2 lg:mb-0 mb-4">
                    <div className="flex lg:flex-col lg:gap-8 gap-2">
                        <div className="lg:w-52 lg:h-52 w-20 h-20 bg-cover bg-center fade-up-flip rounded-full " style={{backgroundImage: `url(${mii1})`, animationDelay: `0.1s` }}></div>
                        <div className="lg:w-52 lg:h-52 w-20 h-20 bg-cover bg-center fade-up-flip rounded-full " style={{backgroundImage: `url(${mii2})`, animationDelay: `0.2s` }}></div>
                    </div>
                    <div className="flex lg:flex-col lg:gap-8 gap-2">
                        <div className="lg:w-52 lg:h-52 w-20 h-20 bg-cover bg-center fade-up-flip rounded-full " style={{backgroundImage: `url(${mii3})`, animationDelay: `0.3s` }}></div>
                        <div className="lg:w-52 lg:h-52 w-20 h-20 bg-cover bg-center fade-up-flip rounded-full " style={{backgroundImage: `url(${mii4})`, animationDelay: `0.4s` }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;