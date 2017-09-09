// Code SimpleComponentHere Here

import React from 'react'

export default class SimpleComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mood: 'happy'
    }
  }

  clickHandler = (e)=>{
    // const newMood = 
    this.setState((prevState, props)=>({
      mood: prevState.mood ==='happy' ? 'sad' : 'happy'
    }))
  }

  render(){
    return (
      <div onClick={this.clickHandler}>
        {this.state.mood}
      </div>
    )
  }
}
