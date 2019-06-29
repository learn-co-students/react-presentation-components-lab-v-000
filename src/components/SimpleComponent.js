import React, { Component } from 'react';

export default class SimpleComponent extends Component {
    state ={
        mood: 'happy'
    }
    
    handleCLick = () => {
      this.setState({mood: 'sad'})
    }

    render(){
        return(
          <div onClick={this.handleCLick}>
            {this.state.mood}
          </div>
        )
    }
}