import React, { Component } from 'react';

class SimpleComponent extends Component {
  // setting the initial state. The state object has a key of 'mood' pointing to the default state value of 'happy'
  state = {
  	mood: 'happy'
  }

  handleClick = () => {
  	this.setState(() => ({ mood: this.state.mood === 'happy' ? 'sad' : 'happy' }))
  }

  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;

/*
// SimpleComponent specs:
// In src/components/SimpleComponent.js file, create a SimpleComponent component.
// SimpleComponent should be declared as a class (instance of Component), so that it can carry state.
// SimpleComponent should have a state property called mood that has a default value of 'happy'.
// SimpleComponent should simply render its current mood state to the page in a <div>.
// SimpleComponent should implement a handleClick function that can serve 
// as a callback to the <div>'s click event. 
// When the <div> is clicked, the component's mood should toggle between 'happy' and 'sad' mood states.
*/