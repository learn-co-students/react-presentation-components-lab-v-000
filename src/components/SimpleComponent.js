import React, { Component } from 'react';

export default class SimpleComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mood: 'happy',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    let newMood = '';
    if(this.state.mood ==='happy'){
      newMood = 'sad';
    } else {
      newMood = 'happy';
    }
    this.setState({
      mood: newMood,
    })
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}
