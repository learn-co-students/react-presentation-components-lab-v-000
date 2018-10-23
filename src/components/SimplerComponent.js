// Code SimplerComponent Here
import React from 'react'

const SimplerComponent = (props) => {

  function handleClick() {
    console.log('happy happy!')
  }

    return (
      <div onClick={props.handleClick}>
      I am just happy
      </div>
    )

}

export default SimplerComponent
