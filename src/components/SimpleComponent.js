import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
     this.setState({
      mood: "sad"
    })
  }

  render() {
    return(
      <div class="mood-change" onClick={this.handleClick}>
      <p>{this.state.mood}</p>
      </div>
    )
  }

}
