// Code SimpleComponentHere Here


import React, {Component} from 'react'

// Code SimpleComponentHere Here
class SimpleComponent extends React.Component {
  constructor(){
    super();

    this.state = {
      mood: "happy"
    }
  }

  handleClick = (event) => {
    if (this.state.mood != "happy"){
    this.setState({
      mood: "happy",
    })} else {
      this.setState({
        mood: "sad",
      })
    }
  }

  render() {
    return (
      <div className="mood" onClick={this.handleClick}>
        <h2>{this.state.mood}</h2>
      </div>
    )
  }
}

export default SimpleComponent;
