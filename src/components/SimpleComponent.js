// Code SimpleComponentHere Here

import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      mood: 'happy'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.state.mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'});
  }

  render() {
    return (
      <div className="mood" onClick={this.handleClick}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}
