// Code SimpleComponentHere Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {
  state = {
    mood: 'happy'
  }

  handleClick = () => {
    const switchMood = this.state.mood === 'happy' ? 'sad' : 'happy'

    this.setState({
      mood: switchMood
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h2>{this.state.mood}</h2>
      </div>
    )
  }
}
