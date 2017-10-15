// Code SimpleComponentHere Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      mood: "happy"
    };


  this.handleClick = this.handleClick.bind(this);

  }

  handleClick = () => {
    this.setState({
      mood: "sad"
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.props.mood}</div>
    )
  }

}


SimpleComponent.defaultProps = {
  mood: "happy"
};

export default SimpleComponent;
