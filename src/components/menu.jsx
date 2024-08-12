import React from "react";
import HomeIconDark from "../assets/icons/BxsHomeDark.svg";
import HomeIconLight from "../assets/icons/BxsHomeLight.svg";

function goHome() {
    const intro = document.getElementById('intro');
    const about = document.getElementById('about');
    const menu = document.getElementById('menu');
    const bgDark = document.getElementById('bgDark');
    const bgLight = document.getElementById('bgLight');
    const arrowDown = document.getElementById('arrowDown');

    about.classList.add('transition-down');
    setTimeout(() => {
        about.classList.add('hidden');
    }, 400);
    setTimeout(() => {
        bgDark.classList.remove('hidden');
        bgLight.classList.remove('hidden');
        menu.classList.add('opacity-0');
        setTimeout(() => {
            bgDark.classList.add('dark:opacity-5');
            bgLight.classList.add('opacity-40');
            intro.classList.remove('hidden');
            arrowDown.classList.remove('hidden');
            menu.classList.add('hidden');
            setTimeout(() => {
                intro.classList.remove('opacity-0');
                arrowDown.classList.remove('opacity-0');
                about.classList.remove('transition-down');
                about.classList.add('opacity-0');
                addEventListener('wheel', scrollDown);
            }, 800);
        }, 400);
    }, 800);
}

function Menu({ darkMode }) {
    return (
        <div>
            <button onClick={goHome}>
                {!darkMode ? (
                    <img src={HomeIconLight} alt="Home" className="w-8 h-8 hover:scale-110 transition duration-200" />
                ) : (
                    <img src={HomeIconDark} alt="Home" className="w-8 h-8 hover:scale-110 transition duration-200" />
                )}
            </button>          
        </div>
    );
}

export default Menu;