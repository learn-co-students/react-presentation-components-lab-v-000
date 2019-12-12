// Code SimpleComponent Here

import React, { Component } from 'react';

class SimpleComponent extends Component {

    state = {
        mood: "happy"
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }

    handleClick = () => {
        let newMood = "sad"
        if (this.state.mood === "sad") {
            newMood = "happy"
        }
        this.setState({
            mood: newMood
        })
    }

}

export default SimpleComponent;