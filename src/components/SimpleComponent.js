import React, {Component} from 'react';

export default class DumbComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    };
  }

  handleClick = () => {
    const moodChange = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({mood: moodChange});
  }

  render () {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
