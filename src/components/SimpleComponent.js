import React, { Component } from 'react'

class SimpleCompnent extends Component {

	state = {
		mood: 'happy'
	}

	handleClick = () => {
		this.state.mood === 'happy' ? this.setState({ mood: 'sad' }) : this.setState({ mood: 'happy' })
	}

	render() {
		return(
			<div onClick={this.handleClick}>
				{this.state.mood}
			</div>
		)
	}

}

export default SimpleCompnent	