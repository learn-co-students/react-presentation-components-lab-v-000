// Code SimplerComponentHere Here
import React from 'react';

// class SimplerComponent extends React.Component {
//   render() {
//     <div onClick={props.handleClick}>
//     "I am just happy"
//
//     </div>
//   }
// }

const SimplerComponent = (props) => {
  return (
    <div onClick={props.handleClick}>
    I am just happy
    </div>
  )
}

export default SimplerComponent;
