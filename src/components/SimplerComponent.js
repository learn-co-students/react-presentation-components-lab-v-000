import React from 'react';



const SimplerComponent = (props) => {
  function handleClick(e){
    return true
  }

  return( <div onClick={ (event) => handleClick(event) }>I am just happy</div> )
}

export default SimplerComponent
