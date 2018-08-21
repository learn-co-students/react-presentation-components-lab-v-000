// Code SimpleComponent Here
import React, { Component } from 'react';

export default class SimpleComponent extends Component {

    // Constructor for using/initializing state
    constructor() {
        super();
        
        // Define the initial state:
        this.state = {
          mood: 'happy'
        };
    }
    
    // Function to change mood
    handleClick = () => {
        let setMood
        if (this.state.mood === 'happy') {
            setMood = 'sad'
        } else {
            setMood = 'happy'
        }
        
        this.setState({
            mood: setMood
        }, console.log(this.state.mood))
    }
    
    render() {
        return (
          <div className="simplecomponent" onClick={this.handleClick}>
            {this.state.mood}
          </div>
        );
    }
}
