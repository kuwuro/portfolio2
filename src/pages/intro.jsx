import React, { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import ArrowDownDark from '../assets/icons/ArrowDownDark.svg';
import ArrowDownLight from '../assets/icons/ArrowDownLight.svg';

function Intro() {
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
    }, 400);
    setTimeout(() => {
      arrowDown.classList.add('hidden');
      document.getElementById('about').classList.remove('hidden');
      document.getElementById('bgDark').classList.remove('dark:opacity-5');
      document.getElementById('bgLight').classList.remove('opacity-40');
      document.getElementById('bgDark').classList.add('dark:opacity-0');
      document.getElementById('bgLight').classList.add('opacity-0');
      setTimeout(() => {
        document.getElementById('bgDark').classList.add('hidden');
        document.getElementById('bgLight').classList.add('hidden');
      }, 400);
      setTimeout(() => {
        document.getElementById('about').classList.remove('opacity-0');
      }, 700);
    }, 700);
  }

  return (
    <div id="title" className="text-center flex flex-col justify-center items-center gap-4">
      <div className='flex flex-col gap-2'>
        <h1 id='enricAr'
          className="lg:text-7xl text-5xl font-poppins select-none tracking-widest dark:text-white"
          style={{ whiteSpace: 'pre' }}
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />
        <p id='webDev' className="lg:text-2xl text-xl font-poppins select-none dark:text-white lg:opacity-0 transition lg:duration-500 duration-300">WEB DESIGNER & DEVELOPER</p>
      </div>
      {/* <p className="text-xl font-dmsans select-none dark:text-white">
        <Trans i18nKey="intro" />
      </p> */}
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
