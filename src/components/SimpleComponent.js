// Code SimpleComponentHere Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      mood: 'happy'
    }
  }
  render() {
    return (
      <div onClick={this.handleClick}>
        <p>{this.state.mood}</p>
      </div>
    )
  }

  handleClick = () => {
    (this.state.mood === "happy") ? this.setState({ mood: 'sad' }) : this.setState({ mood:  'happy' })
  }
}


export default SimpleComponent
