// Code SimpleComponent Here
import React, {Component} from 'react'

class SimpleComponent extends Component {
  state = { mood: "happy" }

  handleClick = () => {
  
    this.setState({ mood: "sad" })
    console.log(this.state.mood)
  }

  render(){
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }

}
export default SimpleComponent
