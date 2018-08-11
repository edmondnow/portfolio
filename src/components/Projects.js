import React from 'react';
import { SpringGrid } from 'react-stonecutter';
import ProjectCard from './ProjectCard';
import projectList from './projectList';

function returnProject(target) {
  let list = projectList;
  if (target !== 'all') {
    list = projectList.filter(item => {
      return item.labels.includes(target);
    });
  }
  return list.map(project => (
    <div key={`${project.name}Card`}>
      <ProjectCard {...project} />
    </div>
  ));
}

const Projects = ({ target }) => {
  return (
    <div className="projects-container">
      <SpringGrid
        component="ul"
        columns={4}
        columnWidth={150}
        gutterWidth={20}
        gutterHeight={20}
        itemHeight={190}
        springConfig={{ stiffness: 170, damping: 26 }}
      >
        {returnProject(target)}
      </SpringGrid>
    </div>
  );
};

export default Projects;
