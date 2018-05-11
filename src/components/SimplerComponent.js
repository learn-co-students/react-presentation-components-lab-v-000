// Code SimplerComponentHere Here

import React from 'react';


const SimplerComponent = (props) => {
  return (
    <div className="happy" style={{fontWeight: 'bold', fontSize: 30}} onClick={(event) => props.handleClick(event)}>
      "I am just happy."
    </div>
  )
}

export default SimplerComponent;
