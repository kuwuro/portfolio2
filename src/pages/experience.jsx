import React from "react";
import { useTranslation } from "react-i18next";

function Experience({ darkMode }) {
    const screenWidth = window.innerWidth;
    const { t } = useTranslation();
    return (
        <div className="lg:mx-12 mx-8 lg:my-36 my-24 flex flex-col lg:gap-8 gap-4 justify-start items-start" style={{ height: `${screenWidth < 1080 ? '73vh' : '80vh'}` }}>
            <h1 className="lg:text-5xl text-4xl font-poppins dark:text-white">{t('experienceTitle')}</h1>
            <div className="grid grid-cols-2 gap-2 w-full h-full">
                <div className="flex justify-center items-center">
                    <div className="w-full h-full border flex flex-row">
                        <div className="w-8 h-full flex">
                            <hr className="w-10 border-8 -rotate-90"></hr>
                        </div>
                        <div className="w-full bg-white">
                            <h2 className="font-dmsans dark:text-white">Company</h2>
                            <p className="font-dmsans dark:text-white">Role</p>
                            <p className="font-dmsans dark:text-white">Date</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-full h-full bg-white fade-up-flip">this is a test</div>
                </div>
            </div>
        </div>
    );
}

export default Experience;