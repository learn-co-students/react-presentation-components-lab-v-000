import React from 'react'

class SimpleComponent extends React.Component {
	constructor(props) {
		super();

		this.state = {
		mood: "happy"
		}
	}

	render() {
		return (
			<div onClick={this.handleClick}>{this.state.mood}</div>
		)
	}

	handleClick = () => {
		const moodChange = this.state.mood === 'happy' ? 'sad' : 'happy'
		this.setState({ mood : moodChange})
	}
}

export default SimpleComponent