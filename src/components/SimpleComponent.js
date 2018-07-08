import React from 'react'

class SimpleComponent extends React.Component {
  constructor(){
    super()

    this.state = {
      mood: "happy"
    }
  }

  changeMood = () => {
    if (this.state.mood === "happy"){
      this.setState({mood: "sad"})
    } else {
      this.setState({mood: "happy"})
    }
  }

  render(){
    return(
      <div onClick={this.changeMood}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
