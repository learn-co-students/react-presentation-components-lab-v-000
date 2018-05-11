// Code SimpleComponentHere Here
import React, { Component} from 'react';

class SimpleComponent extends Component {
  constructor() {
    super();

    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    if (this.state.mood === "happy") {
    this.setState({
      mood: "sad",
      color: "blue"
    })} else {
      this.setState({
        mood: "happy",
        color: "red"
      })
    }
  }

  render() {
    return (
      <div style={{fontWeight: 'bold', fontSize: 30, color: this.state.color}} onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent;
