import React from 'react';

export default class SimpleComponent extends React.Component{
  constructor(){
    super();
    this.state = {
      mood: 'happy'
    }
  }

  moodToggle = () => {
    if(this.state.mood === 'happy'){
      this.setState({mood: 'sad'})
    } else {
      this.setState({mood: 'happy'})
    }
  }

  render(){
    return (
      <div onClick={this.moodToggle}>
        {this.state.mood}
      </div>
    )
  }
}