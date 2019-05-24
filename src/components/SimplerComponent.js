// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = props => {
    return (
      <div onClick= {props.handleClick}>I am just happy"</div>
    )
}

//can also do on 1 line:
//const SimplerComponent = props => <div onClick={props.handleClick}>I am just happy"</div>

export default SimplerComponent