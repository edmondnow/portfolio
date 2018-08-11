import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

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

  render() {
    const { name, pic, labels } = this.props;
    return (
      <div className="project-card" key={name}>
        <img src={pic} alt={name} className="project-pic" />
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
      </div>
    );
  }
}

export default ProjectCard;
