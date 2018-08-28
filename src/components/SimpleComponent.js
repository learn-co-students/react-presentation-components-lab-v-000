import React, { Component } from 'react'

export default class SimpleComponent extends Component {

	state = {
		mood: 'happy',
	};

	render () {
		return (
			<div onClick={this.handleClick}>
				{this.state.mood}
			</div>
			)
	}

	handleClick = () => {
		const currentMood = this.state.mood === 'happy' ? 'sad' : 'happy';
		this.setState({
			mood: currentMood,
		});
	}
	
}
