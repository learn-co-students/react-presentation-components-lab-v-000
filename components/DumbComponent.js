import React from 'react'; 

export default class DumbComponent extends React.Component {
  constructor(){
    super();  
    this.state = {
      mood: 'happy', 
    }
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick() {
    this.setState({
      mood: (this.state.mood == "happy" ? "sad" : "happy"),  
    }) 
  }
  
  render() {
    return( 
      <div className="dumb-component" onClick={this.handleClick}>
        {this.state.mood}
      </div>
         )
  }
}

