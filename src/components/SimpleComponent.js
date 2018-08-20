import React from 'react';

class SimpleComponent extends React.Component {
  state = {
    mood: "happy"
  }

  render () {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    );
  }

  handleClick = () => {
    this.setState(function (prevState) {
      return prevState.mood === 'happy' ? {mood: 'sad'} : {mood: 'happy'}
    });
  }
}

export default SimpleComponent;