import React, { useEffect } from 'react';
import gsap from 'gsap';

import img0 from '../../images/img0.png';
import img1 from '../../images/img1.png';
import img2 from '../../images/img2.png';
import img3 from '../../images/img3.png';
import img4 from '../../images/img4.png';
import img5 from '../../images/img5.png';


const Projects = [
  { title: 'Web UI/UX', type: 'User Activity', year: '2023', imgSrc: img0 },
  { title: 'Web UI/UX', type: 'Team Activity', year: '2023', imgSrc: img1 },
  { title: 'Web UI/UX', type: 'Payment details', year: '2023', imgSrc: img2 },
  { title: 'Web UI/UX', type: 'Account Setting', year: '2023', imgSrc: img3 },
  { title: 'Logo', type: 'Platform Circle Logo', year: '2023', imgSrc: img4 },
  { title: 'Logo', type: 'Platform Main Logo', year: '2023', imgSrc: img5 },
];

const Content5 = () => {
  useEffect(() => {
    const listBox = document.querySelectorAll('.con5 .listBox li');
    const imgBox = document.querySelector('.con5 .imgBox');
    const img = document.querySelector('.con5 .imgBox img');

    /*     if (!listBox.length || !img || !imgBox) {
      console.error('DOM 요소를 찾을 수 없습니다.');
      return;
    }
 */

    gsap.timeline({
      scrollTrigger: {
        trigger: '.con5',
        start: '0% 100%',
        end: '100% 0%',
        toggleClass: { targets: '.wrap', className: 'on' },
      },
    });

    const handleMouseOver = (i) => {
      return () => {
        //console.log(`Mouse over: ${i}`);

        img.src = Projects[i].imgSrc;
        gsap.set(imgBox, { scale: 0, opacity: 0 });
        gsap.to(imgBox, { scale: 1, opacity: 1, duration: 0.3 });
      };
    };

    const handleMouseMove = (e) => {
      //console.log(`Mouse move: ${e.pageX}, ${e.pageY}`);
      const imgBoxX = e.pageX + 20;
      const imgBoxY = e.pageY - 20;
      imgBox.style.left = `${imgBoxX}px`;
      imgBox.style.top = `${imgBoxY}px`;
    };

    const handleMouseOut = () => {
      //console.log('Mouse out');
      gsap.to(imgBox, { scale: 0, opacity: 0, duration: 0.3 });
    };

    listBox.forEach((item, i) => {
      const mouseOverHandler = handleMouseOver(i);
      item.addEventListener('mouseover', mouseOverHandler);
      item.addEventListener('mousemove', handleMouseMove);
      item.addEventListener('mouseout', handleMouseOut);

      return () => {
        item.removeEventListener('mouseover', mouseOverHandler);
        item.removeEventListener('mousemove', handleMouseMove);
        item.removeEventListener('mouseout', handleMouseOut);
      };
    });

    return () => {
      listBox.forEach((item) => {
        item.removeEventListener('mouseover', handleMouseOver);
        item.removeEventListener('mousemove', handleMouseMove);
        item.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return (
    <section className="con5">
      <div className="inner">
        <div className="mainTextBox">
          <h2>OTHER PROJECTS</h2>
        </div>
        <ul className="listBox">
          {Projects.map((project, index) => (
            <li key={index}>
              <h3>{project.title}</h3>
              <p>{project.type}</p>
              <p>{project.year}</p>
            </li>
          ))}
        </ul>
        <div className="imgBox box">
          <img src={img0} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Content5;
