// Code SimpleComponent Here
import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    this.state.mood === "happy" ? this.changeMood("sad") : this.changeMood("happy")
  }

  changeMood = (newMood) => {
    this.setState({mood: newMood})
  }


  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}