import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: 'happy',
    }
  }

  handleClick = () => {
    // if (this.state.mood === 'happy') {
    //   this.setState({
    //     mood: 'sad',
    //   });
    // } else {
    //   this.setState({
    //     mood: 'happy',
    //   });
    // }
    this.setState({ mood: !this.state.mood });
  }

  render() {
    return (
      <div className="mood" onClick={this.handleClick}>
        <h2>{this.state.mood}</h2>
      </div>
    )
  }
}

export default SimpleComponent;
