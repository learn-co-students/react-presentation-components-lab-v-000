import React from 'react'

export default class SimpleComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    const setMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({
      mood: setMood
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
