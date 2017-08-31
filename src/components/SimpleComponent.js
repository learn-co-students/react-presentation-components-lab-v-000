// Code SimpleComponentHere Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
//constructor
  constructor(props) {
    super(props);

    this.state = {
      mood: "happy"
    };
    this.handleClick = this.handleClick.bind(this)
  }

//functions
handleClick() {
  this.setState({ mood: "sad" });
}

//render
  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}


SimpleComponent.defaultProps = {
  mood: "happy"
};

export default SimpleComponent;
