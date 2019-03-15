// Code SimpleComponent Here
import React from 'react'

class SimpleComponent extends React.Component {
  state = {
    mood: "happy",
  }

  handleClick = () => {

    console.log('The link was clicked.');
    if (this.state.mood == "happy") {
      this.setState({
        mood: "sad"
      })
    } else if (this.state.mood == "sad") {
      this.setState({
        mood: "happy"
      })
    }
  }

  render() {
    return <div className="newdiv" onClick={this.handleClick}>{this.state.mood}</div>;
  }
}


export default SimpleComponent
