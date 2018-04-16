import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor() {
    super()

    this.state = {
      mood: 'happy'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const mood = this.state.mood
    return (
      <div onClick={this.handleClick} >
        {mood}
      </div>
    );
  }

  handleClick(event) {
    const mood = (this.state.mood === 'happy' ? 'sad' : 'happy')

    this.setState({
      mood: mood
    })
  }
}

export default SimpleComponent;