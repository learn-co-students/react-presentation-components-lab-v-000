// Code SimpleComponentHere Here
import React from 'react';

class SimpleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      mood: 'happy',
    }
  }

  handleClick = (event) => {
    if (this.state.mood === 'happy') {
      this.setState({
        mood: 'sad',
      });
    } else {
      this.setState({
        mood: 'happy',
      });
    }
  }

  render() {
    return (
      <div className="mood" onClick={this.handleClick}>
        <h1>{this.state.mood}</h1>
      </div>
    );
  }
}

export default SimpleComponent;
