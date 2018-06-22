import React from 'react';

export default class SimpleComponent extends React.Component {
	constructor(){
		super();

		this.state = {
			mood: 'happy'
		};
	}

	handleClick = event => this.setState(this.state.mood === 'happy' ? {mood: 'sad'} : {mood: 'happy'})

	render() {
		return (
			<div onClick={handleClick} className="mood">
				<p>I am {this.state.mood}</p>
			</div>
		);
	}
}

