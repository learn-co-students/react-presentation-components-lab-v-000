import React from 'react';

export default class DumbComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      mood: "happy",
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let mood = this.state.mood === "happy" ? "sad" : "happy";
    this.setState({
      mood: mood
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}
