import React from 'react'

class SimpleComponent extends React.Component {
    constructor(props) {
      super(props);
   
      // Initial state here...
      this.state = {
          mood: 'happy'
      };
    }
   
    handleClick = () => {
      // Probably do some work to update the state
        (this.state.mood === 'happy')?this.setState({mood: 'sad'}): this.setState({mood: 'happy'})
    }
   
    render() {
      // Return JSX that renders into HTML
      return(<div onClick={this.handleClick}><p>{this.state.mood}</p></div>)
    }
  }

  export default SimpleComponent