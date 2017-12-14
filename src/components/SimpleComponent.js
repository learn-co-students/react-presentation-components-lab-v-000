import React from 'react';

export default class SimpleComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            mood: 'happy'
        }
    }

    handleClick = () => {
        // if mood is happy set it to sad else set it to happy
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({ mood: newMood });
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>{this.state.mood}</p>
            </div>
        )
    }
}