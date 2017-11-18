import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor() {
    super();

      this.state = {
        mood: "happy"
      }
}

  onClickChange = () => {
    this.setState({
      mood: "sad"
    })
  }

  render() {
    return (
      <div onClick={this.onClickChange}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
