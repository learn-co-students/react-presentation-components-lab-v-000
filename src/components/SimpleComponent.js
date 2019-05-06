// Code SimpleComponent Here
import React, { Component } from 'react'


// create a SimpleComponent component declared as a class
// (instance of Component) so that it can carry state
class SimpleComponent extends Component {
// Component should have a state property called mood that
// has a default value of 'happy.'
	state = {
		mood: 'happy'
	}

// Component should implement a handleClick function that
// can serve as a callback to the div's click event. When 
// clicked, the component's mood should toggle between happy
// and sad states.
	handleClick = () => {
		if (this.state.mood == 'happy') {
			this.setState({
				mood: 'sad'
			})
		} else {
			this.setState({
				mood: 'happy'
			})
		}
	}

// Component should render its current mood state to the page
// in a div
	render() {
		return(
			<div onClick={this.handleClick}>{this.state.mood}</div>
			)
	}
}

export default SimpleComponent
