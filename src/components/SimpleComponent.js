
import React from 'react';

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    let changedMood = '';
    this.state.mood === 'happy' ? changedMood = 'sad' : changedMood = 'happy';
    this.setState({
        mood: changedMood
      })
  };


  render() {
    return (
     <div onClick={this.handleClick}>{this.state.mood}</div>
    );
  }
}

export default SimpleComponent;


