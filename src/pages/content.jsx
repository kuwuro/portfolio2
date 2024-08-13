import React from "react";
import { useTranslation } from "react-i18next";

function Content() {
    const { t } = useTranslation();
    
    return (
        <div className="lg:mx-12 mx-8 lg:my-40 my-32 flex justify-start items-start">
            <h1 className="text-5xl font-poppins dark:text-white">{t('projectsTitle')}</h1>
        </div>
    );
}

export default Content;