// Code SimpleComponentHere Here
import React from 'react'
class SimpleComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      mood:'happy'
    }
  }

  handleClick = (e) => { this.setState({mood: (e.target.innerText === "happy" ? "sad" : "happy")}) }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent;
