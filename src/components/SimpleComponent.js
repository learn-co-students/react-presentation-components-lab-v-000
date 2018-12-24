import React, { Component } from 'react'


class SimpleComponent extends Component {

  state = {
    mood: 'happy'
  }

  handleClick = () => {
    let x;
    if (this.state.mood === 'happy') {
      x = 'sad'
    }
    else if (this.state.mood === 'sad') {
      x = 'happy'
    }
    this.setState({
      mood: x
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  }
}

export default SimpleComponent
