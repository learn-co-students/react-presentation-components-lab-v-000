// Code SimpleComponent Here

import React from 'react';
import SimplerComponent from './SimplerComponent'

class SimpleComponent extends React.Component {
        constructor() {
          super();

          this.state = {
                mood: 'happy',
          }
	}

        handleClick = () => {
          const mood = (this.state.mood === 'happy') ? { mood: 'sad'} : { mood: 'happy'};
	  this.setState (
                  mood
          )

        }

//		  <SimplerComponent
//		    handleClick = { this.handleClick }
//		    mood = {this.state.mood}		    
//		  />
  render() {
          return (
	      <div onClick={this.handleClick}>
		  {this.state.mood}
	      </div>
           )
  }
}

export default SimpleComponent
