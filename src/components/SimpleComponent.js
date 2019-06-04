// Code SimpleComponent Here
import React, { Component } from 'react'

class SimpleComponent extends Component {
  constructor() {
    super()
		this.state = { mood: "happy" }
  }
	
	handleClick = () => {
		if (this.state.mood === "happy") {
			this.setState({mood: "sad"})
		} else {
			this.setState({mood: "happy"})
		}		
		
		return null
	}

  render () {
    return (
			<div id="container" onClick={this.handleClick}>
					{this.state.mood}
			</div>
    )
  }
}

export default SimpleComponent 

