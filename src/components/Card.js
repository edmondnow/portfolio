import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typist from 'react-typist';
import {
  faPhone,
  faEnvelopeOpen,
  faFile,
  faUndo
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands';

const description = key => (
  <Typist cursor={{ show: false }} avgTypingDelay={0} key={key}>
    <p>
      Lorem ipsum dolor ex magna. Interdum malesuada fames ac ante ipsum amet et
      faucibus. Pellentesque et venenatis dolor imperdiet lorem dolor mattis
      lorem sagittis. Praesent rutrum magna sem diam.
    </p>
  </Typist>
);

const url = 'https://www.worldtimebuddy.com/?pl=1&lid=2746301&h=2746301';
const phone = key => (
  <Typist cursor={{ show: false }} avgTypingDelay={0} key={key}>
    <p>
      Feel free to reach out anytime, <a href={url}> dutch time</a>. I'm
      available at <a href="tel:0031633357057">00 31 6333 57057</a>. If I don't
      pick up, I'll get back to you.
    </p>
  </Typist>
);

const email = key => (
  <Typist cursor={{ show: false }} avgTypingDelay={0} key={key}>
    <p>
      Write me at{' '}
      <a href="mailto:edmond.bitay@gmail.com">edmond.bitay@gmail.com</a>. I'll
      get back to you within a workin day.
    </p>
  </Typist>
);

class Card extends Component {
  state = { description: 'description' };

  renderJSX(desc) {
    switch (desc) {
      case 'phone':
        return phone(desc);
      case 'email':
        return email(desc);
      default:
        return description();
    }
  }

  render() {
    const desc = this.state.description;
    return (
      <div className="card">
        <div className="portrait-container">
          <img src={require('./pic.png')} alt="edmond" className="portrait" />
        </div>
        <div className="text-container">
          <h1 className="name">Edmond Bitay</h1>
          <h3 className="title">Full Stack Developer</h3>
          <div className="description">{this.renderJSX(desc)}</div>
          <div className="logo-container">
            <a
              onClick={() => {
                this.setState({
                  description: desc === 'phone' ? 'description' : 'phone'
                });
              }}
            >
              <FontAwesomeIcon
                icon={desc === 'phone' ? faUndo : faPhone}
                size="lg"
                className={desc === 'phone' ? 'me-icon color' : 'me-icon'}
              />
            </a>
            <a
              onClick={() =>
                this.setState({
                  description: desc === 'email' ? 'description' : 'email'
                })
              }
            >
              <FontAwesomeIcon
                icon={desc === 'email' ? faUndo : faEnvelopeOpen}
                size="lg"
                className={desc === 'email' ? 'me-icon color' : 'me-icon'}
              />
            </a>
            <a href="http://github.com/edmondnow">
              <FontAwesomeIcon icon={faGithub} size="lg" className="me-icon" />
            </a>
            <a href="http://linkedin.com/in/ebitay">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className="me-icon"
              />
            </a>
            <div className="cv-container">
              <a href={require('./resume.pdf')}>
                <FontAwesomeIcon
                  icon={faFile}
                  size="lg"
                  className="me-icon cv-icon"
                />
              </a>
              <span className="cv">CV</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
