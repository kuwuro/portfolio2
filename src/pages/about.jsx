import React from "react";
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();
    
    return (
        <div className="lg:mx-20 mx-10 lg:my-40 my-32 flex justify-start items-start">
            <h1 className="text-5xl font-poppins dark:text-white">{t('about')}</h1>
        </div>
    );
}

export default About;