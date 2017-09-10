import React from 'react'

export default class SimpleComponent extends React.Component {

  constructor(props){
    super();

    this.state = {
      mood: "happy"
    }
  }

  handleClick = ()=>{
    this.setState({mood: this.state.mood === "happy"? "sad" : "happy"}, ()=>{console.log(this.state)})
  }

  render(){
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }

}