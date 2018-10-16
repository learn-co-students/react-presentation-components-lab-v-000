// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			mood: 'happy'	
		}
	}

	render(){
		return(<div onClick={(event) => this.setState({mood: 'sad'})}>{this.state.mood}</div>);
	}

}

export default SimpleComponent