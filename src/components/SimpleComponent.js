import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      mood: 'happy'
    }
  }

  handleMood = () => {
    this.setState({mood: this.state.mood === 'happy' ? 'sad' : 'happy'})
  }

  render(){
    return(
      <div onClick={this.handleMood}>
        {this.state.mood}
      </div>
    )
  }
}
