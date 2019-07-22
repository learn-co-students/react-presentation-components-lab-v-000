import React from "react";
import SimplerComponent from './SimplerComponent'

class SimpleComponent extends React.Component {

  state = {
    mood: 'happy'
  }

  handleClick = () => {
    this.setState({
      mood: 'sad'
    })
  }

  render() {
    return (
      <div>
        < SimplerComponent onClick={this.handleClick}/>
        <div>{this.state.mood}</div>
      </div>
    )
  }

}

export default SimpleComponent;
