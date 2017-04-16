import React from 'react';

export default class DumbComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const newMood = this.state.mood == 'happy' ? 'sad' : 'happy';
    this.setState({ mood: newMood });
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }

  // render() {
  //   return (
  //     <div onClick={this.handleClick}>{this.state.mood}</div>
  //   );
  // }
}
