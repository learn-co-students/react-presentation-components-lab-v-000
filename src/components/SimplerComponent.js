// Code SimplerComponent Here
import React, { Component } from 'react'



// class SimplerComponent extends React.Component {
//
//   render() {
//     return(
//         <div>"I am just happy"</div>
//     )
//   }
// }
//




const SimplerComponent = props => {
  return(
    <div onClick={props.handleClick} >"I am just happy"</div>
  )
}


export default SimplerComponent
