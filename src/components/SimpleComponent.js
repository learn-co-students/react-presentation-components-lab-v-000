
// THE COMPONENT SHOULD:
  // -be declared as a class (instance of Component) so that it can carry state.
  // -have a state property called mood that has a default value of happy.
  // -simply render its current mood state to the page in a div.
  // -implement a handleClick function that can serve as a callback to the <div>'s 
    // click event. When clicked, the component should toggle between happy and sad states.

// Code SimpleComponent Here:
import React, { Component } from 'react';

class DumbComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    };
  }

  handleClick = () => {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({ mood: newMood });
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}

export default DumbComponent;