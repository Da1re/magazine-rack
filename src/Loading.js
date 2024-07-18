import React, { useEffect } from 'react';
import mainLogo from './images/logo/Main_Logo.png';

const Loading = () => {
  useEffect(() => {
    const loading = document.querySelector('.loading');
    const rotate = document.querySelectorAll('.rotate');
    const rotateText = document.querySelectorAll('.rotateText');
    const opacity = document.querySelectorAll('.opacity');
    const opacityText = document.querySelectorAll('.opacityText');
    const svgAni = document.querySelectorAll('.svgAni');
    

    setTimeout(() => loading.classList.add('scene1'), 0);
    setTimeout(() => loading.classList.add('scene2'), 1500);
    setTimeout(() => loading.classList.remove('scene1', 'scene2'), 2500);
    setTimeout(() => {
      rotate.forEach((rotate) => {
        rotate.classList.add('on');
      });
    }, 2500);
    setTimeout(() => {
      rotateText.forEach((rotateText) => {
        rotateText.classList.add('on');
      });
    }, 2000);
    setTimeout(() => {
      opacity.forEach((opacity) => {
        opacity.classList.add('on');
      });
    }, 2500);

    setTimeout(() => {
      opacityText.forEach((opacityText) => {
        opacityText.classList.add('on');
      });
    }, 2500);
    setTimeout(() => {
        svgAni.forEach((svgAni) => {
            svgAni.classList.add('on');
      });
    }, 2500);
  }, []);
  return (
    <div className="loading">
      <div className="logo">
        <span>
          <img src={mainLogo} alt="" />
        </span>
      </div>
    </div>
  );
};
export default Loading;
