// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood: 'happy'
  }

	handleOnClick = () => {
		this.state.mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
	}	

	render() {
		return(
			<div onClick={this.handleOnClick}>
				{this.state.mood}
			</div>
		)
	}
}

export default SimpleComponent