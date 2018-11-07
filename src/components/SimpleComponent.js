import React, {Component} from 'react'

class SimpleComponent extends React.Component {
  state ={
    mood: 'happy'
  }

  changeMood=()=>{
    if(this.state.mood =='happy'){
      this.setState({mood: 'sad'})
      return true
    } else {
      this.setState({mood:'happy'})
    }
  }
  
  render(){
    return(
      <div onClick={this.changeMood.bind(this)}>{this.state.mood}</div>
    )
  }
}
export default SimpleComponent
