// Code SimpleComponentHere Here
import React, { Component } from 'react';

export default class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>{this.state.mood}</h1>
      </div>
    );
  }
}