// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    if (this.state.mood === 'happy') {
      this.setState({mood: 'sad'})
    } else if (this.state.mood === 'sad') {
      this.setState({mood: 'happy'})
    }
    return this.state.mood
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent