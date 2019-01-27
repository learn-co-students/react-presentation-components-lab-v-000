// Code SimpleComponentHere Here

import React, { Component } from 'react';

export default class SimpleComponentHere extends Component {
  constructor(){
    super()

    this.state={
      mood:"happy"
    };
  }

  handleClick = () => {
    this.setState({mood: this.state.mood === 'happy' ? 'sad' : 'happy'})
  }
  render(){
    return(
      <div className="mood" onClick= {this.handleClick}>
      {this.state.mood}
      </div>
    )
  }
}
