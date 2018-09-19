// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
          mood: "happy"
      }
    }
    
    handleClick = () => {
      var nuMood
      this.state.mood === "sad" ? nuMood = "happy" : nuMood = "sad"
      this.setState({ mood: nuMood })
      console.log(this.state.mood)
    }
    
    render() {
      return (
        <div onClick={this.handleClick}>{this.state.mood}</div>
      )
    }
}

export default SimpleComponent