// Code SimpleComponent Here
import React, { PureComponent } from 'react';

class SimpleComponent extends PureComponent {

  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
  }

  changeMood = (event) => {
    if (this.state.mood === 'happy'){
      this.setState({mood : 'sad'})
    } else if (this.state.mood === 'sad') {
      this.setState({mood : 'happy'})
    }
  }


  render() {
    return (
      <div onClick={this.changeMood}>{this.state.mood}</div>
    );
  }

}

export default SimpleComponent;
