import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelopeOpen,
  faFile
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands';

const Card = () => {
  return (
    <div className="card">
      <div className="portrait-container">
        <img src={require('./pic.png')} alt="edmond" className="portrait" />
      </div>
      <div className="text-container">
        <h1 className="name">Edmond Bitay</h1>
        <h3 className="title">Full Stack Developer</h3>
        <p>
          Lorem ipsum dolor ex magna. Interdum malesuada fames ac ante ipsum
          amet et faucibus. Pellentesque et venenatis dolor imperdiet lorem
          dolor mattis lorem sagittis. Praesent rutrum magna sem diam.
        </p>
        <div className="logo-container">
          <FontAwesomeIcon icon={faPhone} size="lg" className="me-icon" />
          <FontAwesomeIcon
            icon={faEnvelopeOpen}
            size="lg"
            className="me-icon"
          />
          <a href="http://github.com/edmondnow">
            <FontAwesomeIcon icon={faGithub} size="lg" className="me-icon" />
          </a>
          <a href="http://linkedin.com/in/ebitay">
            <FontAwesomeIcon icon={faLinkedin} size="lg" className="me-icon" />
          </a>
          <div className="cv-container">
            <FontAwesomeIcon
              icon={faFile}
              size="lg"
              className="me-icon cv-icon"
            />
            <span className="cv">CV</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
