import React from 'react';

export default class DumbComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mood: 'happy'
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.setState({
      mood: this.state.mood === 'sad' ? 'happy' : 'sad'
    })
  }

  render(){
    return (
      <div onClick={this.onClick}>
        {this.state.mood}
      </div>
    )
  }
}
