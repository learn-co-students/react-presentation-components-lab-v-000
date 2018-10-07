import React, { Component } from 'react';

class SimpleComponent extends Component {

  constructor(){
    super()

    this.state = {
      mood: 'happy'
    }
  }

  render(){
    return(
      <div className='SimpleComponent' onClick={ this.handleClick }>
        { this.state.mood }
      </div>
      )
  }

  handleClick = () => {
    this.setState({
      mood: 'sad'
    })
  }

}

export default SimpleComponent
