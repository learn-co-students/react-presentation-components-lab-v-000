import React, { Component } from 'react'

class SimpleComponent extends Component {

  constructor() {
    super();

    this.state = {
      mood: 'happy',
    }
  }

  handleClick = () => {
    if (this.state.mood === 'happy') {
      this.setState({
        mood: 'sad'
      })
    } else {
      this.setState({
        mood: 'happy'
      })
    }
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h1>{this.state.mood}</h1>
      </div>
    )
  }
}

export default SimpleComponent
