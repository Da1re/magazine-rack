import React from 'react';

const Content1 = () => {
  return (
    <section className="con1">
      <div className="inner">
        <div className="box">
          <div className="mainText">
            <p>
              안녕하세요! <br /> FE개발자 유수빈입니다. ♪(´▽｀)
            </p>
          </div>
          <div className="subText">
            <p>
              화려하고 완벽한 기술은 아니지만 항상 배우고 노력하는 자세로
              <br />
              <span>어제보다 나은 오늘, 오늘보다 나은 내일을 지향하는 개발자</span>입니다!
            </p>
          </div>
          <div className="subText">
            <p>
              저에게 웹 개발은 어렵지만 즐겁고 행복한 친구입니다.
              <br />
              제 손을 거쳐간 결과물이 사용자에게도 좋은 경험을 가져다 주길
              바라며
              <br />
              진심을 다하는 개발자가 되겠습니다.🌱
            </p>
            <a href={process.env.PUBLIC_URL} className="btn ">
              @ skill&nbsp;&nbsp;&nbsp;&nbsp; React | CSS | photoshop  
            </a>
          </div>
        </div>
        <div className="textAni">
          <ul>
            <li>Do you have a (vague) idea?</li>
            <li>
              A (crazy) desire?
              <br />A message (to shout)?
            </li>
            <li>Need a little helping hand?</li>
            <li>Or do we take care of everything?</li>
            <li>You are in the right place.</li>
            <li>Contact us</li>
          </ul>
          <a href={process.env.PUBLIC_URL} className="btn svgAni">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
export default Content1;
