// Code SimpleComponent Here
import React, { Component } from 'React';

export default class SimpleComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    };
  }

  handleClick = () => {
    const newDay = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({mood: newDay})
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
