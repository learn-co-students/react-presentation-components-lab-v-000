import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  constructor() {
    super()

    this.state = {
      mood: 'happy'
    };
  } 
  render() {
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }

  handleClick = () => {
    if (this.state.mood === 'sad') {
      this.setState({
        mood: 'happy'
      })
    } else {
      this.setState({
        mood: 'sad'
      })
    }
    
  }
}
