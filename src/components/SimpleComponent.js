import React from 'react';
// Code SimpleComponentHere Here
export default class SimpleComponent extends React.Component {
    constructor(){
        super();

        this.state = {
            mood: "happy"
        }
    }
    updateMood(){
        this.setState({
            mood: "sad"
        })
    }
    render(){
        return (
            <div onClick={this.updateMood.bind(this)}>{this.state.mood}</div>
        );
    }
}