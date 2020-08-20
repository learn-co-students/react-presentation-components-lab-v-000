import React, { Component } from 'react';

export default class SimpleComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            mood: 'happy'
        }
    }

    handleOnClick = () => {
        this.setState({ mood: 'sad' })
    }

    render () {
        return (
            <div onClick={ this.handleOnClick }>
                {this.state.mood}
            </div>
        )
    }
}
