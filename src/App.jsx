import { useState } from 'react'
import './index.css'
import Intro from './pages/intro'
import Settings from './components/settings'

function getRandomDelay(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let rippleTimeout;

function generateRandomRipple() {
  if (document.visibilityState === 'visible') {
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
  const smallRipple = document.createElement('div');
  smallRipple.classList.add('small-ripple');
  smallRipple.style.left = x + 'px';
  smallRipple.style.top = y + 'px';
  document.body.appendChild(smallRipple);

  smallRipple.addEventListener('animationend', () => {
      smallRipple.remove();
  });
}

function createClickRipple(x, y, isRandom = false) {
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

function App() {
  let body = document.querySelector('body');
  let lastRippleTime = 0;

  window.addEventListener('load', () => {
    document.body.classList.add('pointernone');
    document.getElementById('intro').classList.remove('hidden');
    setTimeout(() => {
      document.getElementById('intro').classList.add('opacity-100');
    }, 800);
    setTimeout(() => {
      createClickRipple(window.innerWidth / 2, window.innerHeight / 2, false);
      setTimeout(() => {
        createClickRipple(window.innerWidth / 1.7, window.innerHeight / 2.5, false);
      }, 200);
      setTimeout(() => {
        document.getElementById('settings').classList.remove('hidden');
        setTimeout(() => {
          document.getElementById('settings').classList.add('opacity-100');
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
    <div className='background-layer flex items-center justify-center'>
      <div className='absolute dark:opacity-100 opacity-5 bg-black h-full w-full z-0'></div>
      <div id='settings' className='fixed top-0 right-0 lg:m-12 m-8 hidden opacity-0 transition duration-500 z-10'>
        <Settings darkModeHandler={darkModeHandler} darkMode={darkMode}/>
      </div>
      <div id="intro" className='hidden opacity-0 transition duration-500 z-10'>
        <Intro/>
      </div>
      </div>
  );
}

export default App
