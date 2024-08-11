import React from "react";
import Dark from "../assets/icons/BxsMoon.svg";
import Light from "../assets/icons/BxsSun.svg";

function Settings({ darkModeHandler, darkMode }) {
    return (
        <div>
            <div className="flex justify-between items-center z-10">
                <button onClick={darkModeHandler}>
                    {!darkMode ? (
                        <img src={Dark} alt="Dark Mode" className="w-8 h-8" />
                    ) : (
                        <img src={Light} alt="Light Mode" className="w-8 h-8" />
                    )}
                </button>
            </div>
        </div>
    );
}

export default Settings;
