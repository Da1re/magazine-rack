import React from 'react';
import img0 from '../../images/img0.jpg';

const Projects = [
  { title: 'Daebang', type: 'Undustry', year: '2024' },
  { title: 'THE Dopda', type: 'Platform', year: '2024' },
  { title: 'Musign', type: 'Agency', year: '2024' },
  { title: 'Y.studio', type: 'Agency', year: '2024' },
  { title: 'Crew a la Mode', type: 'Agency', year: '2024' },
  { title: 'Hanhwa', type: 'Chemical', year: '2024' },
  { title: 'Phomain', type: 'Vietnamese restaurant', year: '2024' },
];

const Content5 = () => {
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
