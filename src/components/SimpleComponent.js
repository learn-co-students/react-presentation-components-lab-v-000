// Code SimpleComponentHere Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      mood: this.props.mood
    };
  }



  render() {
    return (
      <div>{this.props.mood}</div>
    )
  }

}


SimpleComponent.defaultProps = {
  mood: "happy"
};

export default SimpleComponent;
