import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
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
          {' '}
          {label}{' '}
        </div>
      );
    });
  };

  render() {
    const { name, pic, labels, description, url, github } = this.props;
    console.log(this.props);
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

/*


        <div
          dangerouslySetInnerHTML={{ __html: pic }}
          className="project-pic"
        />
        <div className="card-inner">
          <h6 className="card-title">{name}</h6>
          <div className="labels-container">{labels.map(label => label)}</div>
          <button onClick={this.onOpenModal}>Open modal</button>
          <Modal
            key={`${name}Modal`}
            open={this.state.open}
            onClose={this.onCloseModal}
            center
          >
            <h2>Simple centered modal</h2>
          </Modal>
        </div>

        */
