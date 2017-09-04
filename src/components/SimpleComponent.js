// Code SimpleComponentHere Here
import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = (e) => {
    let m = this.state.mood === 'happy' ? "sad" : "happy";
    this.setState({
      mood: m,
    })
  }

  render(){
    return(
        <div onClick={this.handleClick}>{this.state.mood}</div>
    );
  }
}
