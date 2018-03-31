// Code SimpleComponentHere Here
import React from 'react'

export default class SimpleComponent extends React.Component {
  constructor(prop){
    super(prop)

    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    this.setState({
      mood: this.state.mood === 'happy' ? 'sad' : 'happy'
    })
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}