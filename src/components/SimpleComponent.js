// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
    constructor() {
        super()
        
        this.state= {
            mood: "happy"
        };
    }

    handleClick = () => { 
        // if (this.state.mood == "happy") {
        //     this.setState({
        //         mood: 'sad'
        //     })
        // }
        // if(this.state.mood == 'sad') {
        //     this.setState({
        //         mood:'happy'
        //     })
        // }
        this.setState(state => {
            if(state.mood == 'happy') {
                return {mood: 'sad'}
            }
            if(state.mood == 'sad') {
                return {mood: 'happy'}
            }
        })
    
    }
    render() {
        return(
            <div onClick={this.handleClick}>{ this.state.mood }</div>
        )
    }
}

export default SimpleComponent; 

