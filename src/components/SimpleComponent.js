// Code SimpleComponentHere Here
import React, { Component } from 'react';

export default class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'happy' };
  }

  handleChange(event) {
    this.setState({
      mood: 'sad'
    });
  }

  render() {
    return (
      <div onClick={(event) => this.handleChange(event)}>
        <h1>{this.state.mood}</h1>
      </div>
    );
  }
}