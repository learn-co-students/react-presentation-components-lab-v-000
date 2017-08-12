// Code SimpleComponentHere Here
import React from 'react';

export default class SimpleComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mood: 'happy',
    };

    this.changeMood = this.changeMood.bind(this)
  }

  changeMood() {
    this.setState({
      mood: this.state.mood === 'happy' ? 'sad' : 'happy'
    })
  }

  render(){
    return(
      <div onClick={this.changeMood}>{this.state.mood}</div>
    )
  }
}
