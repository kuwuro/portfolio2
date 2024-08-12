import React from "react";

function Intro() {
  // const titleH1 = document.querySelector('#title h1');
  // function updateTitle() {
  //     const titleText = document.querySelector('#title h1').textContent;
  //     const screenWidth = window.innerWidth;

  //     if (screenWidth <= 600) {
  //         const breakText = titleText.replace(/\s/g, '<br>');
  //         titleH1.innerHTML = breakText;
  //         titleH1.style.whiteSpace = 'normal';
  //     } else {
  //         const spannedText = titleText.split('').map((letter, index) => `<span style="--i:${index + 1}">${letter}</span>`).join('');
  //         titleH1.innerHTML = spannedText;
  //         titleH1.style.whiteSpace = 'pre';
  //     }
  // }
  // updateTitle();

  return (
    <div id="title">
      <h1 className="text-7xl font-poppins select-none tracking-widest dark:text-white">ENRIC ARMENGOL</h1>
      <p className="text-2xl font-poppins select-none dark:text-white">Frontend Developer</p>
      <p className="text-xl font-dmsans select-none dark:text-white">This is a sample text wawawawaa</p>
    </div>
  );
}

export default Intro;