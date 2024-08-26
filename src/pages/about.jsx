import React from "react";
import { useTranslation } from "react-i18next";

function About({ darkMode }) {
    const screenWidth = window.innerWidth;
    const { t } = useTranslation();
    return (
        <div className="lg:mx-12 mx-8 lg:my-36 my-24 flex flex-col lg:gap-8 gap-4 justify-start items-start" style={{ height: `${screenWidth < 1080 ? '73vh' : '77vh'}` }}>
            <h1 className="lg:text-5xl text-4xl font-poppins dark:text-white">{t('aboutTitle')}</h1>
            <div className="grid lg:grid-cols-2 w-full lg:h-full">
                <div className="flex justify-center items-center">
                    <p className="font-dmsans dark:text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas non nemo voluptatum ipsa cupiditate porro vero. Laboriosam fuga tempore harum deserunt, consequuntur vitae, atque quos asperiores dolorem provident expedita assumenda.</p>
                </div>
                <div className="flex justify-center items-center lg:order-last order-first">
                    <div className="w-32 h-32 bg-white fade-up-flip">this is a test</div>
                </div>
            </div>
        </div>
    );
}

export default About;