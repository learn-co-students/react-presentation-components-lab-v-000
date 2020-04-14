// Code SimpleComponent Here

import React from 'react'

class SimpleComponent extends React.Component {

  constructor(props) {

    super()

    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    //(this.state.mood === 'happy') ? this.state.mood = 'sad' : this.state.mood = 'happy'
    //debugger

    if (this.state.mood === 'happy'){
      this.setState({
              mood: 'sad'
      })
    }else{
      this.setState({
        mood: 'happy'
      })
    }


  }


  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }

}

export default SimpleComponent
