import React, { Component } from 'react';

class SimpleComponent extends Component{
  constructor(){
    super();

    this.state = {
      mood: 'happy'
    }
  }
  handleClick = (event) => {
    const { mood } = this.state;
    if (mood === 'happy'){
      this.setState({mood: 'sad'})
    }else if(mood === 'sad'){
      this.setState({mood: 'happy'})
    }
  }

  render(){
    return(
      <div onClick={this.handleClick}><h1>{this.state.mood}</h1></div>
    )
  }
}

export default SimpleComponent;