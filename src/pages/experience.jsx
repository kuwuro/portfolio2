import React from "react";
import { useTranslation } from "react-i18next";

function Experience({ darkMode }) {
    const screenWidth = window.innerWidth;
    const { t } = useTranslation();
    return (
        <div className="lg:mx-12 mx-8 lg:my-36 my-24 flex flex-col lg:gap-8 gap-4 justify-start items-start" style={{ height: `${screenWidth < 1080 ? '73vh' : '80vh'}` }}>
            <h1 className="lg:text-5xl text-4xl font-poppins dark:text-white">{t('experienceTitle')}</h1>
            <p className="font-dmsans dark:text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas non nemo voluptatum ipsa cupiditate porro vero. Laboriosam fuga tempore harum deserunt, consequuntur vitae, atque quos asperiores dolorem provident expedita assumenda.</p>
        </div>
    );
}

export default Experience;