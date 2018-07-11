// Code SimpleComponentHere Here
import React from 'react'

export default class SimpleComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      mood: 'happy'
    }
  }

  toggle = () => {
    console.log(this.state.mood)
    if(this.state.mood === 'happy') {
      this.setState({mood: 'sad'})
    } else {
      this.setState({mood: 'happy'})
    }
  }

  render() {
    return <div onClick={this.toggle}>{this.state.mood}</div>
  }
}