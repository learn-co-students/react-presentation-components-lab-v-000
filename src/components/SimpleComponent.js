// Code SimpleComponentHere Here
import React from 'react';

export default class SimpleComponent extends React.Component{

  constructor() {
    super();
    this.state = {
      mood: "happy"
    }

    this.changeMood = this.changeMood.bind(this);
  }

  changeMood() {
    this.setState({
      mood: 'sad'
    });
  }


    render(){


      return(
        <div onClick={this.changeMood}>
        {this.state.mood}
        </div>
      )
    }
  }
