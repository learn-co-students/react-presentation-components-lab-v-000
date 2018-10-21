// Code SimpleComponent Here
import React, {Component} from 'react';

export default class SimpleComponent extends Component {
    state = {mood: "happy"}

    handleClick = () => {
        this.setState(() => (this.state.mood === "happy" ? {mood: "sad"} : {mood: "happy"}))
    }
    render (){
        return (
           <div onClick={this.handleClick}>{this.state.mood}</div> 
        )

    }
}
