import React, { useEffect, useState } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import ArrowDownDark from '../assets/icons/ArrowDownDark.svg';
import ArrowDownLight from '../assets/icons/ArrowDownLight.svg';
import GithubDark from '../assets/icons/GithubDark.svg';
import GithubLight from '../assets/icons/GithubLight.svg';
import LinkedinDark from '../assets/icons/LinkedinDark.svg';
import LinkedinLight from '../assets/icons/LinkedinLight.svg';
import DownloadCVDark from '../assets/icons/CvDark.svg';
import DownloadCVLight from '../assets/icons/CvLight.svg';
import TwitterDark from '../assets/icons/TwitterDark.svg';
import TwitterLight from '../assets/icons/TwitterLight.svg';
import SteamDark from '../assets/icons/SteamDark.svg';
import SteamLight from '../assets/icons/SteamLight.svg';
import cvENG from '../assets/media/cvs/CVEnricArmengolENG.pdf';
import cvESP from '../assets/media/cvs/CVEnricArmengolESP.pdf';
import cvCAT from '../assets/media/cvs/CVEnricArmengolCAT.pdf';

function downloadCV() {
  if (i18n.language === 'en' || i18n.language === 'en-US') {
      window.open(cvENG, 'mozillaTab');
  } else if (i18n.language === 'es') {
      window.open(cvESP, 'mozillaTab');
  } else if (i18n.language === 'ca') {
      window.open(cvCAT, 'mozillaTab');
  }
}

function Intro({ darkMode, setCurrentTab, scrollActive, setScrollActive }) {
  useEffect(() => {
      if (scrollActive) {
        // console.log('scrollActive');
        window.addEventListener('wheel', scrollDown, true);
      } else {
        // console.log('scrollInactive');
        window.removeEventListener('wheel', scrollDown, true);
      }
  }, [scrollActive]);

  const { t } = useTranslation();
  const [titleHtml, setTitleHtml] = useState('');

  useEffect(() => {
    const updateTitle = () => {
      const titleText = window.location.hostname === 'enricarmengol.com' ? 'ENRIC ARMENGOL' : 'kuwuro';
      const screenWidth = window.innerWidth;

      if (screenWidth <= 600) {
        const breakText = titleText.replace(/\s/g, '<br>');
        setTitleHtml(breakText);
      } else {
        const spannedText = titleText.split('').map((letter, index) => 
          `<span style="--i:${index + 1}">${letter}</span>`
        ).join('');
        setTitleHtml(spannedText);
      }
    };

    updateTitle();
    window.addEventListener('resize', updateTitle);
    return () => window.removeEventListener('resize', updateTitle);
  }, []); 
  
  function scrollDown(event) {
    if (event.deltaY > 0) {
      transitionDown();
    }
  }

  function transitionDown() {
    setScrollActive(false);
    if (scrollActive) {
      window.removeEventListener('wheel', scrollDown, true);
    }
    const arrowDown = document.getElementById('arrowDown');
    const intro = document.getElementById('intro');
    intro.classList.add('transition-up');
    setCurrentTab('projects');

    setTimeout(() => {
      intro.classList.add('hidden');
      intro.classList.add('opacity-0');
    }, 400);

    setTimeout(() => {
      arrowDown.classList.add('hidden');
      document.getElementById('content').classList.remove('hidden');
      document.getElementById('bgDark').classList.remove('dark:opacity-5');
      document.getElementById('bgLight').classList.remove('opacity-40');
      document.getElementById('bgDark').classList.add('dark:opacity-0');
      document.getElementById('bgLight').classList.add('opacity-0');
      document.getElementById('menu').classList.remove('hidden');
      document.getElementById('nav').classList.remove('hidden');
      setTimeout(() => {
        document.getElementById('menu').classList.remove('opacity-0');
        document.getElementById('nav').classList.remove('opacity-0');
      }, 200);
      setTimeout(() => {
        document.getElementById('bgDark').classList.add('hidden');
        document.getElementById('bgLight').classList.add('hidden');
      }, 400);
      setTimeout(() => {
        document.getElementById('content').classList.remove('opacity-0');
        intro.classList.remove('transition-up');
        document.getElementById('gridTiles').children[0].classList.add('fade-left');
        document.getElementById('gridTiles').children[1].classList.add('fade-left');
        document.getElementById('gridTiles').children[2].classList.add('fade-left');
        document.getElementById('gridTiles').children[3].classList.add('fade-left');
        document.getElementById('gridTiles').children[4].classList.add('fade-left');
      }, 700);
    }, 700);
  }

  function throttle(func, delay) {
    let lastTime = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
        func.apply(this, args);
        lastTime = now;
      }
    };
  }

  return (
    <div id="title" className="text-center flex flex-col justify-center items-center gap-5">
      <div className='flex flex-col gap-2'>
        <h1 id='enricAr'
          className="lg:text-7xl text-5xl font-poppins select-none tracking-widest dark:text-white"
          style={{ whiteSpace: 'pre' }}
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />
        <p id='webDev' className="lg:text-2xl text-xl font-poppins select-none dark:text-white lg:opacity-0 transition lg:duration-500 duration-300">WEB DESIGNER & DEVELOPER</p>
      </div>
      <div id='socials' className='flex justify-center items-center gap-6 lg:opacity-0 transition lg:duration-500 duration-300'>
        <a href="https://github.com/kuwuro" target="_blank" rel="noreferrer">
          {!darkMode ? (
            <img src={GithubLight} alt="Github" className="w-12 h-12 hover:scale-110 transition duration-200" />
          ) : (
            <img src={GithubDark} alt="Github" className="w-12 h-12 hover:scale-110 transition duration-200" />
          )}
        </a>
        {window.location.hostname === 'enricarmengol.com' ? (
          <>
            <a href="https://www.linkedin.com/in/enric-armengol/" target="_blank" rel="noreferrer">
              {!darkMode ? (
                <img src={LinkedinLight} alt="Linkedin" className="w-12 h-12 hover:scale-110 transition duration-200" />
              ) : (
                <img src={LinkedinDark} alt="Linkedin" className="w-12 h-12 hover:scale-110 transition duration-200" />
              )}
            </a>
            <button onClick={downloadCV}>
              {!darkMode ? (
                <img src={DownloadCVLight} alt="Download CV" className="w-11 h-11 hover:scale-110 transition duration-200" />
              ) : (
                <img src={DownloadCVDark} alt="Download CV" className="w-11 h-11 hover:scale-110 transition duration-200" />
              )}
            </button>
          </>
        ) : (
          <>
            <a href="https://twitter.com/kurotekku" target="_blank" rel="noreferrer">
              {!darkMode ? (
                <img src={TwitterLight} alt="Twitter" className="w-12 h-12 hover:scale-110 transition duration-200" />
              ) : (
                <img src={TwitterDark} alt="Twitter" className="w-12 h-12 hover:scale-110 transition duration-200" />
              )}
            </a>
            <a href="https://steamcommunity.com/id/kurotekku/" target="_blank" rel="noreferrer">
              {!darkMode ? (
                <img src={SteamLight} alt="Steam" className="w-12 h-12 hover:scale-110 transition duration-200" />
              ) : (
                <img src={SteamDark} alt="Steam" className="w-12 h-12 hover:scale-110 transition duration-200" />
              )}
            </a>
          </>
        )}
      </div>
      <div id='arrowDown' className='absolute bottom-20 lg:opacity-0 flex flex-col justify-center items-center'>
        <button className='focus:outline-none' onClick={transitionDown}>
          <img src={ArrowDownLight} alt='Arrow Down' className='w-16 h-16 animate-bounce dark:hidden'/>
          <img src={ArrowDownDark} alt='Arrow Down' className='w-16 h-16 animate-bounce hidden dark:block'/>
        </button>
        <p className='dark:text-white font-dmsans'>
          {screen.width <= 600 ? t('introButtonMobile') : t('introButton')}
        </p>
      </div>
    </div>
  );
}

export default Intro;
