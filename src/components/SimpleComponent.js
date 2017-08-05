import React, {Component} from 'react';

class SimpleComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mood: 'happy'
    }
  }

  changeMood = () => {
    this.setState({
      mood: 'sad'
    })
  }

  render() {
    return(
      <div onClick={this.changeMood}>
        <p>{this.state.mood}</p>
      </div>
    )
  }
}

export default SimpleComponent;
