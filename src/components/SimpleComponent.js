// Code SimpleComponentHere Here
import React from 'react'

export default class SimpleComponent extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            mood: 'happy'
        }
    }

    handleClick = (e) => {
        this.setState((prevState, props) => {
            return {mood: prevState.mood === 'happy' ? 'sad' : 'happy'}
        })
    }

    render(){
        return (
            <div onClick={this.handleClick}>
                <p>{this.state.mood}</p>
            </div>
        )
    }
}