import React from 'react'

class SimpleComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      mood: "happy"
    }
  }

  moodSwing = event => {
    this.setState({
      mood: "sad"
    })
  }

  render() {
    return (
      <div onClick={this.moodSwing}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
