import React, { useEffect } from 'react';

import TypeIt from 'typeit-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Content5 from './Content5';

import j from '../../images/logo/L_J.png';
import y from '../../images/logo/L_Y.png';
import o from '../../images/logo/L_O.png';
import u from '../../images/logo/L_U.png';
import n from '../../images/logo/L_N.png';
import g from '../../images/logo/L_G.png';

//gsap.registerPlugin(ScrollTrigger);

const MainApp = () => {
  useEffect(() => {
    /* main 첫 화면  */
    if (typeof window !== 'undefined') {
      const visual = gsap.timeline({
        scrollTrigger: {
          trigger: '.visual',
          start: '100% 100%',
          end: '100% 0%',
          scrub: 1,
        },
      });
      visual
        .to(
          '.logoWrap #j',
          { x: -100, y: -50, rotate: 20, ease: 'none', duration: 5 },
          0
        )
        .to(
          '.logoWrap #y',
          { x: -30, y: -150, rotate: -10, ease: 'none', duration: 5 },
          0
        )
        .to(
          '.logoWrap #o',
          { x: 0, y: 400, rotate: -10, ease: 'none', duration: 5 },
          0
        )
        .to(
          '.logoWrap #u',
          { x: 50, y: 300, rotate: 10, ease: 'none', duration: 5 },
          0
        )
        .to(
          '.logoWrap #n',
          { x: 100, y: 100, rotate: -10, ease: 'none', duration: 5 },
          0
        )
        .to(
          '.logoWrap #g',
          { x: 50, y: 450, rotate: 20, ease: 'none', duration: 5 },
          0
        );

      /* 공통 mainTextBox */
      const mainTextBox = document.querySelectorAll('.mainTextBox .title i');
      mainTextBox.forEach((element) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: element,
              start: '100% 100%',
              end: '100% 100%',
              scrub: 1,
            },
          })
          .fromTo(
            element,
            { overflow: 'hidden', y: 150 },
            { y: 0, ease: 'none', duration: 5 },
            0
          );
      });

      /* 공통 subText */
      const subText = document.querySelectorAll('.subText p');
      subText.forEach((element) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: element,
              start: '100% 100%',
              end: '100% 100%',
              scrub: 1,
            },
          })
          .fromTo(
            element,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, ease: 'none', duration: 5 },
            0
          );
      });

      /* content <1> textAni 텍스트 change gsap animation*/
      const textAniList = document.querySelectorAll('.con1 .textAni li');
      const textAni = gsap.timeline({ repeat: -1 });

      textAniList.forEach((element) => {
        textAni
          .to(element, {
            opacity: 1,
            x: 0,
            ease: 'power4.out',
            duration: 0.5,
          })
          .to(element, {
            opacity: 0,
            x: 0,
            ease: 'power4.out',
            duration: 0.5,
            delay: 1,
          });
      });

      textAni.play();

      /* content <4> listBox scroll animation*/
      const listBox = document.querySelectorAll('.con4 .listBox .box');
      listBox.forEach((element) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: element,
              start: '00% 20%',
              end: '0% 0%',
              scrub: 1,
            },
          })
          .to(
            element,
            {
              transform: 'rotateX(-10deg) scale(0.9)',
              transformOrigin: 'top',
              filter: 'brightness(0.8)',
            },

            0
          );

        /* content <3> listBox card animation*/
        const listCard = document.querySelectorAll('.con3 .listBox li');
        listCard.forEach((element, i) => {
          ScrollTrigger.create({
            trigger: element,
            start: '0% 60%',
            onEnter: () => {
              gsap.set(element, {
                rotationX: '-65deg',
                z: '-500px',
                opacity: 0,
              });
              gsap.to(element, {
                rotationX: 0,
                z: 0,
                opacity: 1,
                delay: (i % 3) * 0.1,
              });
            },
          });
        });
      });
    }
  }, []);

  return (
    <>
      <section className="visual">
        <div className="inner">
          <h1 className="mainText">
            <span>
              <i>
                <TypeIt
                  className=""
                  options={{
                    strings: ['Magazine Rack'],
                    speed: 50,
                    waitUntilVisible: true,
                  }}
                />
              </i>
            </span>
          </h1>
          <h2 className="subText">
            Creation, production & distribution of podcasts.
            <br />
            <span>In Toulouse. And everywhere else.</span>
          </h2>
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
        </div>
      </section>
      <Content1 />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
    </>
  );
};

export default MainApp;