import React from 'react'

// 1. The component should be declared as a class (instance of Component) so that it can carry state.
// 2. The component should have a state property called mood that has a default value of happy.
// 3. The component should simply render its current mood state to the page in a div.
// 4. The component should implement a handleClick function that can serve as a callback to the <div>'s 
//    click event. When clicked, the component's mood should toggle between happy and sad states.

class SimpleComponent extends React.Component {

  	constructor() {
    	super()
 
    	this.state = {
      		mood: 'happy'
    	}
  	}

  	handleClick = () => { 
		const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    	this.setState({ mood: newMood });
  	}

  	render() {
	    return <div onClick={this.handleClick}>{this.state.mood}</div>
  	}
}

export default SimpleComponent
