import React, { useState } from 'react'
import './index.css'
import Intro from './pages/intro'
import Content from './pages/content'
import Settings from './components/settings'
import Menu from './components/menu'
import Nav from './components/nav'
import BackgroundLight from './assets/media/bgLight.svg'
import BackgroundDark from './assets/media/bgDark.svg'

function getRandomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let rippleTimeout;

function generateRandomRipple() {
  if (document.getElementById('intro').classList.contains('hidden')) {
    return;
  } else if (document.visibilityState === 'visible') {
    const randomDelay = getRandomDelay(100, 1000);
    rippleTimeout = setTimeout(() => {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      createClickRipple(randomX, randomY, true);

      const nextRandomDelay = getRandomDelay(800, 1200);
      rippleTimeout = setTimeout(generateRandomRipple, nextRandomDelay);
    }, randomDelay);
  } else {
    clearTimeout(rippleTimeout);
  }
}

document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'visible') {
    generateRandomRipple();
  } else {
    clearTimeout(rippleTimeout);
  }
});

function createSmallRipple(x, y) {
  if (document.getElementById('intro').classList.contains('hidden')) {
    return;
  } else if (document.visibilityState === 'visible') {
    const smallRipple = document.createElement('div');
    smallRipple.classList.add('small-ripple');
    smallRipple.style.left = x + 'px';
    smallRipple.style.top = y + 'px';
    document.body.appendChild(smallRipple);

    smallRipple.addEventListener('animationend', () => {
        smallRipple.remove();
    });
  }
}

function createClickRipple(x, y, isRandom = false) {
  if (document.getElementById('intro').classList.contains('hidden')) {
    return;
  } else if (document.visibilityState === 'visible') {
    const clickRipple = document.createElement('div');
    clickRipple.classList.add('click-ripple');
    clickRipple.style.left = (x / window.innerWidth) * 100 + '%';
    clickRipple.style.top = (y / window.innerHeight) * 100 + '%';
    if (isRandom) {
        clickRipple.style.animation = 'randomRippleAnimation 1.4s ease-out';
    } else {
        clickRipple.style.animation = 'clickRippleAnimation 1.4s ease-out';
    }
    document.body.appendChild(clickRipple);
    clickRipple.addEventListener('animationend', () => {
        clickRipple.remove();
    });
  }
}

function App() {
  const screenWidth = window.innerWidth;
  const [currentTab, setCurrentTab] = useState('');

  let body = document.querySelector('body');
  let lastRippleTime = 0;

  window.addEventListener('load', () => {
    document.body.classList.add('pointernone');
    document.getElementById('intro').classList.remove('lg:hidden');
    setTimeout(() => {
      document.getElementById('intro').classList.remove('lg:opacity-0');
      document.getElementById('intro').classList.add('opacity-100');
    }, 800);    
    setTimeout(() => {
      createClickRipple(window.innerWidth / 2, window.innerHeight / 2, false);
      setTimeout(() => {
        createClickRipple(window.innerWidth / 1.7, window.innerHeight / 2.5, false);
      }, 200);
      setTimeout(() => {        
        setTimeout(() => {      
          document.getElementById('webDev').classList.remove('lg:opacity-0');    
          document.getElementById('webDev').classList.add('opacity-100');
          setTimeout(() => {
            setTimeout(() => {
              document.getElementById('socials').children[0].classList.add('socials-animation');
            }, 50);
            setTimeout(() => {
              document.getElementById('socials').children[1].classList.add('socials-animation');
            }, 250);
            setTimeout(() => {
              document.getElementById('socials').children[2].classList.add('socials-animation');
              document.getElementById('socials').classList.remove('lg:opacity-0');
            }, 450);            
          }, 200);
        }, 500);
      }, 500);  
    }, 1500);    
    setTimeout(() => {
      generateRandomRipple();
      body.addEventListener('click', function (e) {
        createClickRipple(e.clientX, e.clientY, false);
      });     
      document.querySelectorAll('#enricAr span').forEach((span, index) => {
        span.style.animation = `waviy 3.5s ease-in-out infinite ${index * 0.1}s`;
      });  
      document.getElementById('arrowDown').classList.remove('lg:hidden');
      document.getElementById('settings').classList.remove('lg:hidden');
      setTimeout(() => {
        document.getElementById('settings').classList.remove('lg:opacity-0');
        document.getElementById('arrowDown').classList.remove('lg:opacity-0');
        document.getElementById('settings').classList.add('opacity-100');
        document.getElementById('arrowDown').classList.add('opacity-100');
      }, 500);
    }, 3300);

    body.addEventListener('mousemove', (e) => {
      const currentTime = new Date().getTime();
      if (currentTime - lastRippleTime > 50) {
          createSmallRipple(e.clientX, e.clientY);
          lastRippleTime = currentTime;
      }
    });
  });

  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true' ? true : false);

  if (darkMode) {
    document.body.classList.add('dark');
  }

  const darkModeHandler = () => {
    localStorage.setItem('darkMode', !darkMode);
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <div className='background-layer flex items-center justify-center overflow-hidden'>
      <div id='bgLight' className='bg-animation absolute h-500 w-500 z-0 opacity-40'>
        <img src={BackgroundLight} alt='Background' className='h-500 w-500 object-cover'/>
      </div>
      <div className='absolute dark:opacity-100 opacity-5 bg-black h-full w-full z-0'></div>
      <div id='bgDark' className='bg-animation absolute h-500 w-500 z-0 dark:opacity-5 opacity-0'>
        <img src={BackgroundDark} alt='Background' className='h-500 w-500 object-cover'/>
      </div>
      <div id='menu' className='fixed top-0 left-0 lg:m-12 m-8 hidden opacity-0 transition duration-500 z-50'>
        <Menu darkMode={darkMode}/>
      </div>
      {screenWidth >= 1080 ? (
        <div id='nav' className='fixed top-0 right-1/2 hidden opacity-0 transition duration-500 translate-x-1/2 lg:my-12 my-8 z-40'>
          <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        </div>
      ) : (
        <div id='nav' className='fixed bottom-0 right-1/2 hidden opacity-0 transition duration-500 translate-x-1/2 lg:my-12 my-8 z-40'>
          <Nav currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        </div>
      )}
      <div id='settings' className='fixed top-0 right-0 lg:m-12 m-8 lg:hidden lg:opacity-0 transition duration-500 z-50'>
        <Settings darkModeHandler={darkModeHandler} darkMode={darkMode}/>
      </div>
      <div id="intro" className='lg:opacity-0 transition h-full w-full flex flex-col justify-center items-center duration-500 z-10'>
        <Intro darkMode={darkMode} setCurrentTab={setCurrentTab}/>
      </div>
      <div id="content" className='hidden opacity-0 transition h-full w-full duration-500 z-10'>
        <Content darkMode={darkMode} currentTab={currentTab} setCurrentTab={setCurrentTab}/>
      </div>
    </div>
  );
}

export default App
