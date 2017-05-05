import React from 'react'

export default class DumbComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: 'happy'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(ev) {
    this.setState((prevState, props) => ({ mood: prevState.mood === "happy" ? "sad" : "happy" }))
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
