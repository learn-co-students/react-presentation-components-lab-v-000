import React, {Component} from 'react';

class SimpleComponent extends Component {
  constructor() {
    super();

    this.state = {
      mood: 'happy'
    };
  }
lea
  handleClick = () => {
    const clickedMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({
      mood: clickedMood
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;
