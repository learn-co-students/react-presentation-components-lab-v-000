// Code SimpleComponentHere Here
import React from 'react'

export default class SimpleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      mood: prevState.mood === 'happy' ? 'sad' : 'happy'
    }))
  }

  render() {
    return (
      <div onClick = {this.handleClick}>{this.state.mood}</div>
    )
  }
}
