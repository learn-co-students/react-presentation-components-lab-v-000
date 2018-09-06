// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component{
    state={
      mood: "happy"
    }

    handleClick = () => {
      this.state.mood === "happy" ? this.setState({mood: "sad"}) : this.setState({mood: "happy"})
    }


  render(){
    return (
          <div onClick={this.handleClick.bind(this)}>
          <p>{this.state.mood}</p>
        </div>
        )
  }
}

export default SimpleComponent;
