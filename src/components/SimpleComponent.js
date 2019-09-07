// Code SimpleComponent Here
import React, { Component } from 'react'


export default class SimpleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mood: "happy"
        }
    }




    handleClick(){
        this.state.mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
    
    //     if (newMood === 'happy') {
    //     this.setState = ({
    //         mood: 'sad'
    //     });
    //   } else {
    //         this.setState = ({
    //             mood: 'happy'
    //   })
      }



    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                {this.state.mood}
            </div>
        )
    }
}
