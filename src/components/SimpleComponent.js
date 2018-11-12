// Code SimpleComponent Here
import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  constructor() {
    super()

    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    let newMood = "happy";
    if (this.state.mood === "happy") {
      newMood = "sad";
    }
    this.setState({
      mood: newMood
    })
  }
  render() {
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
