import React, { Component } from 'react';

export default class SimpleComponent extends Component {
	state = {
		mood: 'happy'
	}

	handleMoodClick = () => {
		this.setState({mood: 'sad'})
	}

	render() {
		return (
			<div onClick={this.handleMoodClick}>{this.state.mood}</div>
		)
	}
}