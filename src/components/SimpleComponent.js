import React, {Component} from 'react';

class SimpleComponent extends Component {

  state = {
    mood: "happy"
  }

  handleClick = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({mood: newMood})
  }

  render() {
    return (
      <div onClick={this.handleClick} mood={this.state.mood}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;
