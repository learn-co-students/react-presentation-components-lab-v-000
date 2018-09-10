// Code SimpleComponentHere Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    this.setState(function (prevState) {
      return (prevState.mood === 'happy') ? {mood: 'sad'} : {mood: 'happy'}
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
