import React from 'react'

class SimpleComponenent extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    let newMood = this.state.mood === "happy" ? "sad" : "happy"
    this.setState({
      mood: newMood
    })
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}

export default SimpleComponenent
