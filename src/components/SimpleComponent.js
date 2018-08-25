// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {

  state = {
    mood: "happy"
  }

  onMoodClick = () => {
    this.setState({
      mood: "sad"
    })
  }

  render() {
    return (
      <div onClick={this.onMoodClick}>
        <h1>{this.state.mood}</h1>
      </div>
    )
  }
}

export default SimpleComponent
