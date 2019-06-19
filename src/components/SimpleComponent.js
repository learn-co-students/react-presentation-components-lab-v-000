// Code SimpleComponent Here
import React, { Component } from 'react'
export default class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }

  handleClick = () => {
    this.setState({mood: "sad"})
  }

  render(){
    return (
      <div onClick={this.handleClick}>
        <h2>{this.state.mood}</h2>
      </div>
    )
  }
}
