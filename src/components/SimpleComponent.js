// Code SimpleComponentHere Here

// Code SimpleComponentHere Here
import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      mood: 'happy'
    };
  }

  handleClick = (event) => {
    this.state.mood === "happy" ? this.setState({
      mood: "sad"
    }) : this.setState({
      mood: "happy"
    })
  }

  render() {

    return (
      <div className="mood" onClick={this.handleClick}>
      {this.state.mood}
      </div>
    );
  }
}