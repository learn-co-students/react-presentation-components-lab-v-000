// Code SimpleComponentHere Here
import React from 'react'

export default class SimpleComponentHere extends React.Component {
  constructor() {
  super()

  this.state = {
    mood: 'happy'
    }
  }

  handleChange = () => {
    this.setState({
      mood: 'sad'
    })
  }
  render() {
    return (
      <div onClick={this.handleChange}>
        {this.state.mood}
      </div>
    )
  }
}
