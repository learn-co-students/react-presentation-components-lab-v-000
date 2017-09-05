import React from 'react';


class SimpleComponent extends React.Component {
  constructor(){
    super();

    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    var moodFlip = this.state.mood === "happy"? "sad" : "happy"
    this.setState(
      {mood: moodFlip}
    );
  }

  render(){
    return (
      <div onClick={this.handleClick}>
      {this.state.mood}
      </div>
    )
  }
}


export default SimpleComponent;
