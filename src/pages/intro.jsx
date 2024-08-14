import React, { useEffect, useState } from 'react';
import i18n  from 'i18next';
import { useTranslation } from 'react-i18next';
import ArrowDownDark from '../assets/icons/ArrowDownDark.svg';
import ArrowDownLight from '../assets/icons/ArrowDownLight.svg';
import GithubDark from '../assets/icons/GithubDark.svg';
import GithubLight from '../assets/icons/GithubLight.svg';
import LinkedinDark from '../assets/icons/LinkedinDark.svg';
import LinkedinLight from '../assets/icons/LinkedinLight.svg';
import DownloadCVDark from '../assets/icons/CvDark.svg';
import DownloadCVLight from '../assets/icons/CvLight.svg';

function downloadCV() {
  if (i18n.language === 'en' || i18n.language === 'en-US') {
      window.open('https://www.enricarmengol.com/cvs/CVEnricArmengolENG.pdf', 'mozillaTab');
  } else if (i18n.language === 'es') {
      window.open('https://www.enricarmengol.com/cvs/CVEnricArmengolESP.pdf', 'mozillaTab');
  } else if (i18n.language === 'ca') {
      window.open('https://www.enricarmengol.com/cvs/CVEnricArmengolCAT.pdf', 'mozillaTab');
  }
}

function Intro({ darkMode }) {
  const { t } = useTranslation();
  const [titleHtml, setTitleHtml] = useState('');

  function scrollDown(event) {
    event.deltaY > 0 && transitionDown();
  }
  addEventListener('wheel', scrollDown);

  useEffect(() => {
    const updateTitle = () => {
      const titleText = 'ENRIC ARMENGOL';
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

  function transitionDown() {
    removeEventListener('wheel', scrollDown);
    const arrowDown = document.getElementById('arrowDown');
    const intro = document.getElementById('intro');
    intro.classList.add('transition-up');
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
      setTimeout(() => {
        document.getElementById('menu').classList.remove('opacity-0');
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
        document.getElementById('gridTiles').children[5].classList.add('fade-left');
      }, 700);
    }, 700);
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
