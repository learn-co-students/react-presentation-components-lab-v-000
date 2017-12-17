import React from 'react';
// Code SimpleComponentHere Here
export default class SimpleComponent extends React.Component {
    constructor(){
        super();

        this.state = {
            mood: "happy"
        }
    }
    handleClick = () => {
        this.setState({
            mood: "sad"
        })
    }
    render(){
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        );
    }
}
