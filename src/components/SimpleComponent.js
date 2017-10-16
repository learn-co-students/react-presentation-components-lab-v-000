// Code SimpleComponentHere Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      mood: "happy"
    };
  }


  handleClick = () => {
    const newMood = 'sad';
    this.setState({ mood: newMood });
  }

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
