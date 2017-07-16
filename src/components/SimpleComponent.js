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
      mood: "happy" ? "sad" : "happy"
    })
  }
  
 render(){

    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    );
    
  }
}

export default SimpleComponent;