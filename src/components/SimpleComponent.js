// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends React.Component {
  constructor(){
    super()
    this.mood = "happy"
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    mood: "happy"
  }


  //
  // handleClick = e => {
  //   console.log(e.target)
  //     if (this.state.mood === "happy") {
  //       this.setState({
  //         mood: "sad"
  //     })}
  //     else {
  //       this.setState({
  //         mood: "happy"
  //     })
  //     }
  //   }

  handleClick(e){
    this.setState({
      mood: "sad"
    })
  }


  render(){
    return(
      <div onClick={ this.handleClick }>{this.state.mood}</div>
    )
  }

}

export default SimpleComponent
