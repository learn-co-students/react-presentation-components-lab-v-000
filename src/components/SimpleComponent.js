import React, { Component } from 'react';

export default class SimpleComponent extends Component {

  constructor(){
    super();
    this.state = {
      mood: 'happy'
    }
  }

  toggleMood = () => {
    if (this.state.mood == 'happy'){
      this.setState({
        mood: 'sad'
      })
    } else {
      this.setState({
        mood: 'happy'
      })
    }
  }

  handleClick = () => {
    this.toggleMood();
  }

 
  render(){
    return (
    <div onClick={this.handleClick}>{this.state.mood}</div>)
  }
}