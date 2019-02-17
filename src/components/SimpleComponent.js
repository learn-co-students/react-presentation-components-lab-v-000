import React, { Component } from 'react'

export default class SimpleComponent extends Component {
  constructor() {
    super()

    this.state = { mood: "happy" }
  }

  render() {
    return (<div onClick={this.handleClick}>{this.state.mood}</div>)
  }

  handleClick = () => {
    const oppositeMood = { "happy": "sad", "sad": "happy" }
    this.setState({mood: oppositeMood[this.state.mood]})
  }
}