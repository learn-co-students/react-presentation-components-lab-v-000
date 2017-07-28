import React from 'react';
import { Component } from 'react';
import SimplerComponent from './SimplerComponent'

class SimpleComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      mood: 'happy'
    };

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const newMood = this.state.mood == 'happy' ? 'sad' : 'happy';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}
      <SimplerComponent handleClick={this.handleClick} />
      </ div>
    )
  }

}

export default SimpleComponent;


