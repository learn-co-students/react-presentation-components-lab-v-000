// Code SimpleComponent Here
import React, { Component } from "react";

export default class SimpleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {mood: "happy"};
  }

  render() {
    return (
      <div onClick={()=> {if (this.state.mood === "happy") {this.setState({mood: "sad"});} else {this.setState({mood: "happy"});}}}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
  
}