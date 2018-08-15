import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
class ProjectCard extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  labelRender = labels => {
    return labels.map(label => {
      return (
        <div className={`label-container ${label.toLowerCase()}-label`}>
          {" "}
          {label}{" "}
        </div>
      );
    });
  };

  render() {
    const { name, labels, description, url, github } = this.props;
    return (
      <div className="card-labels-container">
        <div className="project-card">
          <h1 className="project-title">{name}</h1>

          <p className="project-description">{description}</p>
          <div className="button-container">
            <a href={url} className="button">
              Open
            </a>
            <a href={github} className="button github-button">
              <FontAwesomeIcon icon={faGithub} className="github" size="lg" />
              <span className="github-span">GitHub</span>
            </a>
          </div>
        </div>
        <div className="labels-container">{this.labelRender(labels)}</div>
      </div>
    );
  }
}

export default ProjectCard;
