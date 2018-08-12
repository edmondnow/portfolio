import React, { Component } from 'react';

class Divider extends Component {
  state = {
    open: false
  };
  onClickHandler = () => {
    if (this.props.name === 'All' && this.state.open) {
      return;
    }
    this.props.changeTarget(this.props.name, !this.state.open);
    this.setState({ open: !this.state.open });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.name === 'All') {
      this.setState({ open: nextProps.allOpen });
    }

    if (
      nextProps.allOpen !== this.props.allOpen &&
      nextProps.allOpen &&
      this.props.name !== 'All'
    ) {
      this.setState({ open: false });
    }
  }

  componentDidMount() {
    if (this.props.name === 'All') {
      this.setState({ open: true });
    }
  }

  render() {
    const { name, color, logo, classTop } = this.props;
    return (
      <div
        className={
          this.state.open
            ? `divider divider-hover ${classTop}`
            : `divider ${classTop}`
        }
        onClick={this.onClickHandler}
        name={name}
        style={{ backgroundColor: color, opacity: 0.8 }}
      >
        <div
          className="divider-title"
          dangerouslySetInnerHTML={{ __html: logo }}
        />
      </div>
    );
  }
}

export default Divider;
