import React, { Component } from 'react';


class SimpleComponent extends Component {

    constructor() {
        super();
        this.state = { mood: "happy" }
    }

    handleClick = (event) => {

        if(event.currentTarget == "happy") {
            this.setState({ mood: "sad"})
        }else {
            this.setState({ mood: "happy"})
        }

    }

    render() {
        return (
            <div id='simple-component' onClick={(event) => this.handleClick(event)}>
                {this.state.mood}
            </div>
        )

    }
}

export default SimpleComponent
