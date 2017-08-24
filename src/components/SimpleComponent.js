import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      mood: 'happy',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let theMood = this.state.mood === 'happy' ? 'sad' : 'happy';

    this.setState({
      mood: theMood,
    });
  }

  render() {
    return (
      <div onClick={this.handleClick} >
        <h1>{this.state.mood}</h1>
      </div>
    )
  }
}