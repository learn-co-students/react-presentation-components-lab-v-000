// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimplerComponent extends Component {

  state = {
    mood: 'happy'
  }

  handleClick = () => {
    this.setState({
      mood: 'sad'
    })
  }


  render() {
    return (
      <div onClick={this.handleClick}>
      {this.state.mood}
      </div>
    )
  }
}
