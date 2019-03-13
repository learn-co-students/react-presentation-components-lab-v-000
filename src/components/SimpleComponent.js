import React, { Component } from 'react'
// Code SimpleComponent Here

class SimpleComponent  extends Component {

  state = {
    mood: 'happy'
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }

  handleClick = () => {
    const mood = this.state.mood === 'happy' ? 'sad' : 'happy';

    this.setState ({
      mood: mood
    });
  }
}

export default SimpleComponent;
