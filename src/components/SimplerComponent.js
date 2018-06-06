// Code SimplerComponentHere Here

import React from 'react'

const SimplerComponent = (props) => {
  return (
    <div onClick={props.handleClick}>
      "I am just happy"
    </div>

  )
}


// This passes all but the last test:

// const SimplerComponent = ({property}) => {
//   return (
//     <div onClick={property}>
//       "I am just happy"
//     </div>
//
//   )
// }

export default SimplerComponent
