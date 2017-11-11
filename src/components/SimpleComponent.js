// Code SimpleComponentHere Here
import React, {Component} from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: "happy"
    };

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick = () => {
    this.state.mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
  }



  render() {
    return (
      <div onClick={this.handleClick}><h1>{this.state.mood}</h1></div>
    );
  }
}

export default SimpleComponent;
