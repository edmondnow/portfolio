import React, { Component } from 'react';
import { SpringGrid, enterExitStyle } from 'react-stonecutter';
import ProjectCard from './ProjectCard';

class Projects extends Component {
  componentWillReceiveProps(nextProps) {}

  render() {
    const {
      fromBottom: { enter },
      fromCenter: { entered },
      fromTop: { exit }
    } = enterExitStyle;

    return (
      <div className="projects-container">
        <SpringGrid
          component="ul"
          columns={4}
          columnWidth={190}
          gutterWidth={40}
          gutterHeight={40}
          itemHeight={210}
          enter={enter}
          entered={entered}
          exit={exit}
          springConfig={{ stiffness: 150, damping: 26 }}
        >
          {this.props.projects.map(project => (
            <div key={project.name}>
              <ProjectCard {...project} key={`${project.name}Card`} />
            </div>
          ))}
        </SpringGrid>
      </div>
    );
  }
}

export default Projects;
