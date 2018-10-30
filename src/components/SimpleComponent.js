// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood: 'happy'
  }
  handleClick = () => {
    let newMood = 'happy';
    if (this.state.mood === 'happy') {
      newMood = 'sad';
    }
    this.setState({
      mood: newMood
    })
  }
  render () {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;
