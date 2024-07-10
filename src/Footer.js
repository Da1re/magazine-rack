import React, { useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import j from './images/logo/L_G.png';
import y from './images/logo/L_Y.png';
import o from './images/logo/L_O.png';
import u from './images/logo/L_U.png';
import n from './images/logo/L_N.png';
import g from './images/logo/L_G.png';

gsap.registerPlugin(ScrollTrigger);

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
          //markers: true,
        },
      })
      .to('.logoWrap', { top: '20%', ease: 'none', duration: 5 }, 0);
  }, []);

  return (
    <footer>
      <div className="inner">
        <div className="box">
          <div className="mainTextBox">
            <h2>LET's TALK</h2>
            <p>
              <span>Contact, testimonial or simple hello...</span>
              Leave us an audio message
              <br />
              and your contact details if you wish to be contacted.
            </p>
          </div>
          <div className="talkBtn">
            <a href="/">
              <span></span>
            </a>
          </div>
          <div className="btnBox">
            <a href="/" className="btn">
              email
            </a>
            <a href="/" className="btn">
              call
            </a>
            <a href="/" className="btn">
              tistory
            </a>
            <a href="/" className="btn">
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
