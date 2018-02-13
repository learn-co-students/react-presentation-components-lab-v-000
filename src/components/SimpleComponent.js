import React, { Component } from 'react';

export default class SimpleComponent extends React.Component {
  constructor() {
    super();
 
    this.state = {
      mood: 'happy'
    };
  }

  updateMood = () => {
  	if (this.state.mood === 'happy') {
	    this.setState({
	      mood: 'sad'
	    }) 
	   }else{
	    this.setState({
	      mood: 'happy'
	    }) 	   	
	   }
  }
 
  render() {
    return (
    	<div className="mood" onClick={this.updateMood}>{this.state.mood}</div>
    )
  }
}
