// Code SimpleComponentHere Here
import React, {Component} from 'react';

export default class SimpleComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { mood: 'happy' }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const moodTransition = { happy: 'sad', sad: 'happy' }
    this.setState({
      mood: moodTransition[this.state.mood]
    });
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  }

}
