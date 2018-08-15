import React, { Component } from "react";
import Fade from "react-fade-in";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faFile, faUndo } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/fontawesome-free-brands";

const description = key => (
  <Fade key={key} delay={50}>
    <p>
      I work with the MERN stack with Jest and Enzyme testing. I'm interested in
      full-stack, front-end or back-end positions. I'm currently preoccupied
      with learning more on server-side rendering, React Native and DevOps
      tools.
    </p>
  </Fade>
);

const url = "https://www.worldtimebuddy.com/?pl=1&lid=2746301&h=2746301";
const phone = key => (
  <Fade key={key} delay={50}>
    <p>
      Feel free to reach out anytime. Currently, I work according to{" "}
      <a href={url}> dutch time</a>. I'm available here:
      <br />
      <ul>
        <li>
          <a href="tel:0031633357057">00 31 6333 57057</a>
        </li>
        <li>
          <a href="mailto:edmond.bitay@gmail.com">edmond.bitay@gmail.com</a>
        </li>
      </ul>
    </p>
  </Fade>
);

class Card extends Component {
  state = { description: "description" };

  renderJSX(desc) {
    switch (desc) {
      case "phone":
        return phone(desc);
      default:
        return description();
    }
  }

  render() {
    const desc = this.state.description;
    return (
      <div className="card">
        <div className="portrait-container">
          <img src={require("./pic.png")} alt="edmond" className="portrait" />
        </div>
        <div className="text-container">
          <h1 className="name">Edmond Bitay</h1>
          <h3 className="title">Full Stack Developer</h3>

          <div className="description">{this.renderJSX(desc)}</div>

          <div className="logo-container">
            <a
              onClick={() => {
                this.setState({
                  description: desc === "phone" ? "description" : "phone"
                });
              }}
            >
              <FontAwesomeIcon
                icon={desc === "phone" ? faUndo : faPhone}
                size="lg"
                className={desc === "phone" ? "me-icon color" : "me-icon"}
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
              <a href={require("./resume.pdf")}>
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
