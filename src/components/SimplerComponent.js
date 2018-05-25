import React from 'react'

class SimplerComponent extends React.Component {

  handleClick = () =>{
    this.props.handleClick()
  }

  render(){
    return(
      <div onClick={this.handleClick}>I am just happy</div>
    )
  }
}

export default SimplerComponent