// Code SimpleComponent Here
import React from 'react';

class SimpleComponent extends  React.Component {

    state = {
        mood: "happy"
    }

    handleClick = () => {
        const changedMood = this.state.mood === "happy" ? "sad" : "happy";
        this.setState({
            mood: changedMood
        })
        }
    
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent;