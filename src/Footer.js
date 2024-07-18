import React, { useEffect } from 'react';

import gsap from 'gsap';

import j from './images/logo/L_J.png';
import y from './images/logo/L_Y.png';
import o from './images/logo/L_O.png';
import u from './images/logo/L_U.png';
import n from './images/logo/L_N.png';
import g from './images/logo/L_G.png';

//gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    /* footer animation*/
    gsap
      .timeline({
        scrollTrigger: {
          trigger: 'footer',
          start: '0% 100%',
          end: '70% 0%',
          scrub: 1,
        },
      })
      .to('.logoWrap', { top: '20%', ease: 'none', duration: 5 }, 0);
  }, []);

  return (
    <footer>
      <div className="inner">
        <div className="box">
          <div className="mainTextBox">
            <h2>💌 Comment </h2>
            <p>
             
              <br />
              제 포트폴리오 웹사이트를 방문해주셔서 감사합니다 :) <br />
              앞으로도 꾸준히 업데이트하며, 더 많은 프로젝트와 성과를
              공유하겠습니다. <br /> 함께 멋진 미래를 만들어 나가길 기대합니다!
              <br />
              <br />
              해당 웹사이트는 React를 기반으로 GSAP의 ScrollTrigger를 활용하여
              제작하였으며, Git Hub Pages로 배포했습니다.
              <br />
              <br />
              <br />
              💻 wien2009@naver.com | 📱 010-7761-5801
              <br />
              🔗 photoshop 포트폴리오는 tistory를 확인해주세요!
              <br />
             
            </p>
          </div>
          <div className="talkBtn">
            <a href="/">
              <span></span>
            </a>
          </div>
          <div className="btnBox">
            <a href="https://dalre.tistory.com/" className="btn">
              tistory
            </a>
            <a href="https://github.com/Da1re/magazine-rack" className="btn">
              git
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>Dalre &#64; 2024</p>
        </div>
      </div>
      <div className="logoWrap">
        <span id="j">
          <img src={j} alt="" />
        </span>
        <span id="y">
          <img src={y} alt="" />
        </span>
        <span id="o">
          <img src={o} alt="" />
        </span>
        <span id="u">
          <img src={u} alt="" />
        </span>
        <span id="n">
          <img src={n} alt="" />
        </span>
        <span id="g">
          <img src={g} alt="" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
