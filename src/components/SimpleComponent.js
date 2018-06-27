// Code SimpleComponentHere Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class SimpleComponent extends React.Component {
  constructor () {
    super ()
    this.state = {
      mood: 'happy'
    }
  }

  changeMood = () => {
    if (this.state.mood === 'happy') {
      this.setState({
        mood: 'sad'
      })
    } else {
      this.setState({
        mood: 'happy'
      })
    }

  }

  render () {
    return (
      <div onClick={this.changeMood}>{this.state.mood}</div>
    )
  }
}
