// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {

    state = {
        mood: 'happy'
    }

    changeMood = () => {
        if (this.state.mood === 'happy') {
            this.setState({
                mood: 'sad'
            })
        } else {
            this.setState({
                mood: 'happy'
            })
        }
    }

    render() {
        return (
            <div onClick={this.changeMood}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent