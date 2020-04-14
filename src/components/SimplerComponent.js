// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = (props) => {
  //got error cannot read props of undefined
  //b/c was calling this.props.handleClick
  //but just props b/c taking in as arg
  return (
    <div
      onClick={props.handleClick}
    >
    I am just happy
    </div>
  )
}

export default SimplerComponent
