import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood: 'happy',
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }

  handleClick = e => {
    this.setState({ mood: 'sad' })
  }
}

export default SimpleComponent
