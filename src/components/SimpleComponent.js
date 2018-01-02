import React, { Component } from 'react';

export default class SimpleComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            mood: "happy"
        };
    }

    handleClick = () => {
        const update = this.state.mood === "happy" ? "sad" : "happy";
        this.setState({mood: update});
    }
    
    render(){
        return(
            <div onClick={this.handleClick}>{this.state.mood}</div>
        );
    }    
}