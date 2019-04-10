// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {

    state = {
        mood: 'happy'
    }

    handleClick(event) {
        this.setState(prevState => ({
            mood: prevState.mood === 'happy' ? 'sad' : 'happy'
          }));
    }

    render() {
        return (
            <div onClick={event => this.handleClick(event)}>{this.state.mood}</div>
        );
      }

}
export default SimpleComponent