import React, { Component } from 'react';

class DumbComponent extends Component {
  constructor() {
    super();

    this.state = {
      mood: 'happy'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ mood: 'sad' });
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

export default DumbComponent;
