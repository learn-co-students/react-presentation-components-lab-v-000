import React, { Component } from 'react';

export default class SimpleComponent extends Component{
  constructor(){
    super();

    this.state = {
      mood: 'happy',
    }
  }

  handleClick = () => {
    this.setState({
      mood: 'sad',
    })
  }

  render(){
    return(
      <div onClick={this.handleClick} value={this.state.mood}>{this.state.mood}</div>
    );
  }
}