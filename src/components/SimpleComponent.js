// Code SimpleComponent Here
import React, {Component} from 'react'
import SimplerComponent from './SimplerComponent'
export default class SimpleComponent extends Component{

  constructor(){
    super()
    this.state={
      mood: "happy"
    }
  }

  handleClick=(e)=>{
    if(this.state.mood='happy'){
    this.setState({
      mood: 'sad'
    })
  }else{
    this.setState({
      mood: 'happy'
    })
    }
  }

  alert=()=>{
    alert("You Clicked Me")
  }


  render(){
    return(

     <div onClick={this.handleClick}>

     {this.state.mood}

    </div>


  )}
}
