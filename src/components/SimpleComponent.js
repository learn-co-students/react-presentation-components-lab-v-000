// Code SimpleComponent Here
import React, {Component} from 'react';

class SimpleComponent extends Component {

  state = {
    mood: "happy"
  }

  changeMood = (event) => {
    event.target.innerText === "happy" ? (this.setState({mood: 'sad'})) : (this.setState({mood: 'happy'}))
  }

  render(){
    return(
      <div onClick={this.changeMood}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent;
