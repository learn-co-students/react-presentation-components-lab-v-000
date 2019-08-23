import React, { Component} from 'react'

export default class SimpleComponent extends Component {

		constructor(){
			super()
			this.state = {
				mood: 'happy'
		}
	}

	//AAQ why do i need to pass props here when there are apparently no props?

	handleClick = () => {
		this.setState({
			mood: 'sad'}
		)
	}

	render(){
		return (
			<div onClick={ this.handleClick }>
				{ this.state.mood }
			</div>
		)
	}
}