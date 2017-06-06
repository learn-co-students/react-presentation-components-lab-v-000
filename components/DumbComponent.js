import React from 'react'

const defaultMood = "happy"

export default class DumbComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      mood: defaultMood
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    var newMood = this.state.mood === "sad" ? "happy" : "sad"
    this.setState({
      mood: newMood
    })
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>
  }
}
