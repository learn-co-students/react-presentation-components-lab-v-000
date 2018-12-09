// Code SimpleComponent Here
import React, {Component} from 'react';

class simpleComponent extends Component {

    constructor() {
        super();
        this.state = {
            mood: 'happy'
        };
    }

    handleClick = () => {
        const updateMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        this.setState({mood: updateMood});
    }

    render() {
        return <div onClick={this.handleClick}>{this.state.mood}</div>
    }


}

export default simpleComponent