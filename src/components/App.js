import React, { Component } from 'react';
import Card from './Card';
import Projects from './Projects';
import Dividers from './Dividers';

class App extends Component {
  state = {
    target: 'all'
  };

  changeTarget(target) {
    this.setState({ target });
  }

  render() {
    return (
      <div className="container">
        <div className="card-dividers-container">
          <Card />
          <Dividers changeTarget={this.changeTarget.bind(this)} />
        </div>
        <Projects {...this.state} />
      </div>
    );
  }
}

export default App;
