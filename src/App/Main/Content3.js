import React from 'react';
import defaultImage from '../../images//logo/Main_Logo2_wh.png';
/* import mainImg from '../../images/Myprojects/main.png';
import AIDatasetImage from '../../images/Myprojects/dataset.png';
import Alert from '../../images/Myprojects/Alert.png';
import mainImg3 from '../../images/Myprojects/main2.png';
 */
const projectList = [
  {
    datacolor: 'a',
    title: '비대면 원격근무 Workation Service',
    year: 2022,
    imgSrc: '',
  },
  {
    datacolor: 'b',
    title: '스마트 소비재 부품 제조 협업 플랫폼',
    year: 2023,
    imgSrc: '',
  },
  {
    datacolor: 'c',
    title: 'AI Dataset Web',
    year: 2023,
    imgSrc: '',
  },
  {
    datacolor: 'd',
    title: '스마트 소비재 부품 제조 협업 플랫폼',
    year: 2023,
    imgSrc: '',
  },
  {
    datacolor: 'e',
    title: '스마트 소비재 부품 제조 협업 플랫폼',
    year: 2024,
    imgSrc: '',
  },
  {
    datacolor: 'a',
    title: 'Annotation Tool Lite Ver.',
    year: 2024,
    imgSrc: '',
  },
  { datacolor: 'b', title: 'Project', year: 2024 },
  { datacolor: 'c', title: 'Project', year: 2024 },
  { datacolor: 'd', title: 'Project', year: 2024 },
];

const Content3 = () => {
 

  return (
    <section className="con3">
      <div className="inner">
        <div className="textBox">
          <h4>My Projects</h4>
        </div>
        <ul className="listBox">
          {projectList.map((project, index) => (
            <li key={index} datacolor={project.datacolor}>
              <p className={project.imgSrc ? 'projectImg' : 'img'}>
                <img src={project.imgSrc || defaultImage} alt="" />
              </p>
              <h4>
                <span className="a">{project.title}</span>
                <span className="b">{project.year}</span>
              </h4>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Content3;
