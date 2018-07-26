import React, { Component } from 'react';
import SimplerComponent from './SimplerComponent'
import Toggle from 'react-toggle'

export default class SimpleComponent extends Component {
	constructor() {
		super();

		this.state = {
			mood: 'happy'
		}
	}

	handleClick = () => {
		const toggle = this.state.mood === 'happy' ? 'sad' : 'happy'
		this.setState({
			mood: toggle
		})
	}


	render() {
		return(
			<div onClick={this.handleClick}>
			<p>I am {this.state.mood}</p>
			</div>
			)
	}
}
