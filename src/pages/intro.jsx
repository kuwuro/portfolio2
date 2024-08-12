import React, { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

function Intro() {
  const { t } = useTranslation();
  const [titleHtml, setTitleHtml] = useState('');

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

  return (
    <div id="title" className="text-center flex flex-col gap-4">
      <div className='flex flex-col gap-2'>
        <h1 id='enricAr'
          className="text-7xl font-poppins select-none tracking-widest dark:text-white"
          style={{ whiteSpace: 'pre' }}
          dangerouslySetInnerHTML={{ __html: titleHtml }}
        />
        <p className="text-2xl font-poppins select-none dark:text-white">WEB DESIGNER & DEVELOPER</p>
      </div>
      <p className="text-xl font-dmsans select-none dark:text-white">
        <Trans i18nKey="intro" />
      </p>
    </div>
  );
}

export default Intro;
