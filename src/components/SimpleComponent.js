import React from "react";

// Code SimpleComponent Here
export default class SimpleComponent extends React.Component {
  state = {
    mood: "happy"
  }

  render() {
    return(
      <div onClick={this.toggleMood}>{this.state.mood}</div>
    )
  }

  toggleMood = (event)=> {
    this.setState(state=> {(state.mood === "happy") ? state.mood = "sad": state.mood = "happy"; return state})
  }
}