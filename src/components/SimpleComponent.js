import React, { Component } from 'react'

export default class SimpleComponent extends React.Component {

  onstructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    };
  }

  handleClick = event => {

    if (this.state.mood === "happy") {
      this.setState(
        {mood: "sad"}
      )
    } else {
      this.setState(
        {mood: "happy"}
      )
    }
  }

  render() {
   return <div onClick={this.handleClick}> {this.state.mood}</div>
  }
}
