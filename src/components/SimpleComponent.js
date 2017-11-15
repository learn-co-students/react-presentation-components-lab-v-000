// Code SimpleComponentHere Here
import React from 'react';
class SimpleComponentHere extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mood: 'happy'
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return (this.state !== nextState);
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   return console.log(this.state)
  // }

  handleClick = () => {
    if (this.state.mood === 'happy') {
      this.setState({
      mood: 'sad' }, () => console.log(this.state))
    } else (
      this.setState({
      mood: 'happy' }, () => console.log(this.state))
    )
    // in here I need to change the state to sad or back to happy
  }

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>

  }

}
export default SimpleComponentHere;
