import React from 'react';
import projects from '../../images/projects.png';

const projectList = [
  { datacolor: 'a', title: 'Title', year: 2024 },
  { datacolor: 'b', title: 'Title', year: 2024 },
  { datacolor: 'c', title: 'Title', year: 2024 },
  { datacolor: 'd', title: 'Title', year: 2024 },
  { datacolor: 'e', title: 'Title', year: 2024 },
  { datacolor: 'a', title: 'Title', year: 2024 },
  { datacolor: 'b', title: 'Title', year: 2024 },
  { datacolor: 'c', title: 'Title', year: 2024 },
  { datacolor: 'd', title: 'Title', year: 2024 },
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
              <p className="img">
                <img src={projects} alt="" />
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
