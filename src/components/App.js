import React, { Component } from 'react';
import Card from './Card';
import Projects from './Projects';
import Dividers from './Dividers';
import projectList from './projectList';
import dividerList from './dividerList';

class App extends Component {
  state = {
    targets: [],
    allOpen: true
  };

  returnProjects() {
    const { targets } = this.state;
    let filteredList = [];
    if (targets.length > 0) {
      targets.forEach(target => {
        let filteredItems = projectList.filter(item => {
          return item.labels.includes(target);
        });
        filteredList = [...filteredItems, ...filteredList];
      });
    } else {
      filteredList = projectList;
    }
    return filteredList;
  }

  changeTarget(target, open) {
    const { targets } = this.state;
    if (target === 'All') {
      this.setState({ targets: [], allOpen: true });
      return;
    } else if (!open) {
      let newTargets = targets.filter(oldTarget => {
        return oldTarget !== target;
      });

      this.setState({
        targets: [...newTargets],
        allOpen: newTargets.length === 0
      });
      return;
    }
    this.setState({
      targets: [...[target], ...targets],
      allOpen: false
    });
  }

  render() {
    return (
      <div className="container">
        <div className="card-dividers-container">
          <Card />
          <Dividers
            dividerList={dividerList}
            changeTarget={this.changeTarget.bind(this)}
            allOpen={this.state.allOpen}
          />
        </div>
        <Projects
          targets={this.state.targets}
          projects={this.returnProjects()}
          allOpen={this.state.allOpen}
        />
      </div>
    );
  }
}

export default App;
