// Code SimpleComponent Here
import React from 'react';

export default class SimpleComponent extends React.Component {
    constructor(props) {
        super();
        this.state = {
            mood: "happy"
        }
    }

    handleClick = () => {
        const moodChange = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({ mood : moodChange })
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}