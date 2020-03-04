import React, {Component} from 'react';


export default class SimpleComponent extends Component{
  state = {
    mood: "happy"
  }

  handleClick = (e) => {
    const xMood = this.state.mood === 'happy' ? 'sad' : happy
    this.setState({
      mood: xMood
    })
  }

  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}
