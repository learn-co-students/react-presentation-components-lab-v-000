// Code SimpleComponentHere Hero
import React from 'react'

class SimpleComponent extends React.Component {
	constructor(){
		super()
		this.state = {
			mood: "happy"
		}
	}
	handleclick = () => {
		this.setState({
			mood: this.state.mood === 'happy' ? 'sad' : 'happy'
		})
	}
	render(){
		return <div onClick={this.handleclick}>{this.state.mood}</div>
	}
}

export default SimpleComponent