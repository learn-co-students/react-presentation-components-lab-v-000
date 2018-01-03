// Code SimpleComponentHere Here
import React from 'react';

class SimpleComponent extends React.Component{
  constructor(){
    super();

    this.state ={
      mood: "happy"
    }
  }

    handleClick = (event) => {
      if (this.state.mood === "happy"){
        this.setState({
          mood: "sad"
        })
      } else {
        this.setState({
          mood: "happy"
        })
      }
    }

  render(){
    return(
      <div className="simple-component" onClick={this.handleClick}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}

export default SimpleComponent;
