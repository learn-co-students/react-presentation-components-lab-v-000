// Code SimpleComponentHere Here
import React from 'react';

export default class SimpleComponent extends React.Component{
	constructor(props) {
	    super(props);

	    this.state = {
	      mood: `happy`
	    }
  	} 

  	handleClick = (e) => {
  		this.setState(
  			this.state.mood === 'happy' ? {mood: 'sad'} : {mood: 'happy'}
   		)
  	}

	render(){
		return(<div onClick={this.handleClick}>
				{this.state.mood}
			</div>
		)
	}
}