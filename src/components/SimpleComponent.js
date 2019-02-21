// Code SimpleComponent Here
import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  constructor() {
    super();

    this.state = {
      mood: 'happy',
    };
  }


   handleClick = () => {
     this.setState(prevState => {
    return {...prevState, mood: (prevState.mood == 'happy' ? 'sad' : 'happy')}
  })
}



  render() {
    return (
      <div onClick={this.handleClick}>
    <h1>{this.state.mood}</h1>
    </div>
  );
  }
}
