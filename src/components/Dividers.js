import React, { Component } from 'react';
import ReactHoverObserver from 'react-hover-observer';
import { uniqueId } from 'lodash';

class Divider extends Component {
  state = {
    open: false
  };

  onClickHandler = name => {
    this.props.changeTarget(name);

    console.log(this.state.open);
  };

  render() {
    const { name } = this.props;
    return (
      <div
        key={name}
        className="divider"
        onClick={() => this.onClickHandler(name)}
      >
        {name}
      </div>
    );
  }
}

// TODO putin a backward icon from font-awesome, doesn't need list view

const list = ['React', 'Redux', 'Express', 'MongoDB', 'jQuery'];

const Dividers = ({ changeTarget }) => {
  return (
    <div className="dividers-container">
      {list.map(item => {
        return (
          <ReactHoverObserver key={uniqueId()}>
            <Divider name={item} changeTarget={changeTarget} />
          </ReactHoverObserver>
        );
      })}

      <ReactHoverObserver key={uniqueId()}>
        {({ isHovering }) => (
          <div
            className="divider"
            key="all"
            onClick={() => this.onClickHandler('all')}
          >
            Back
          </div>
        )}
      </ReactHoverObserver>
    </div>
  );
};

export default Dividers;
