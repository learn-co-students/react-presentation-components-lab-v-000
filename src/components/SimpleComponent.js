// Code SimpleComponent Here
import React, {Component} from 'react'


export default class SimpleComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      mood: "happy"
    }
  }

  handleClickEvent = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({
      mood: newMood
    })
  }

  render(){
    return(
      <div onClick={this.handleClickEvent}>
        {this.state.mood}
      </div>
    )
  }


}