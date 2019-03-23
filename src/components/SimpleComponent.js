// Code SimpleComponent Here
import React, { Component } from 'react'

export default class SimpleComponent extends Component {
 
  state = {
    mood: "happy"
  }
 
  render() {
    return (
      <div onClick={this.handleClick}>  
      	{this.state.mood}
      </div>
    )
  }
 
  handleClick = event => { 
  	this.setState({
  		mood: this.state.mood === "happy" ? "sad" : "happy"
  	})
  }
}