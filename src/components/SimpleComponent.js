import React, { Component } from 'react';
// import SimpleComponent from './SimplerComponent';

class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
     mood: "happy"
    };
  }

  handleClick = () =>{
    this.setState({
      mood: toggleMood()
    })
  }

  toggleMood = () => {
    debugger
    console.log(this.state.mood)
    this.state.mood === "happy" ? "sad" : "happy"
  }
  
 render(){

    return (
      <div>{this.state.mood}</div>
    );
    
  }
}

export default SimpleComponent;