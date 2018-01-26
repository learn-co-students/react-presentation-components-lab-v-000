// Code SimpleComponentHere Here
import React from 'react'

class SimpleComponent extends React.Component {
    constructor() {
    super();
  
  this.state = {
    mood: "happy",
    };
  }

  handleClick = () =>{
      this.setState({
          mood: this.state.mood === 'happy' ? 'sad' : 'happy'
      })
  }
    
    render() {
      return (
        <div className="simple-component" onClick={this.handleClick}>
            {this.state.mood}
        </div>
      );
    }
  }

  export default SimpleComponent;


