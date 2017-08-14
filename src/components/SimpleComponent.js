
import React from 'react';
import { Component } from 'react';


export default class SimpleComponent extends Component {

    constructor(props){
        super(props);

        this.state = {
            mood: "happy"
        }
    
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        const moodChange = this.state.mood == 'happy' ? 'sad' : 'happy';
        this.setState({mood: moodChange})
    }

  render() {
    return (
      <div onClick = {this.handleClick}>{(this.state.mood)}
      </div>
    );
  }
}