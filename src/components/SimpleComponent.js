import React from 'react';
import ReactDOM from 'react-dom';

export default class SimpleComponent extends React.Component {

  constructor () {
  super();

  this.state = {
    mood: 'happy'
  }
}

  handleClick = () => {
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

  render() {
    return <div className="mood-section"onClick={this.handleClick}>{ this.state.mood }</div>
  }

}
