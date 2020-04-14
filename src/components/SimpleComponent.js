// Code SimpleComponent Here
import React, {Component} from 'react';
export default class SimpleComponent extends Component{
    constructor(){
        super()
        this.state = {
            mood: "happy"
        }
    }

    handleClick = () => {
        this.setState(prevState => {
            if (prevState.mood === "happy"){
                this.state.mood = "sad"
            }
            
        })
    }

    render(){
        return(
            <div className="mood" value={this.state.mood} onClick={this.handleClick}>
                {this.state.mood}
            </div>
            
        )
    }

}