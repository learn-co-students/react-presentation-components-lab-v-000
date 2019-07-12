import React from 'react'

class SimpleComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {mood: 'happy'}
  }

  handleClick = (event) => {
    let toggle = this.state.mood === 'happy' ? 'sad' : 'happy'
    this.setState({
    mood: toggle
    })
}

  render() {
    return (

      <div onClick={event => this.handleClick(event)}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
