// Code SimpleComponent Here
import React from 'react'

export default class SimpleComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mood: "happy"
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      mood: (this.state.mood === "happy") ? "sad" : "happy"
    });
  }

  render() {
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}
