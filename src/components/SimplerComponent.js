// Code SimplerComponent Here
// import React, { Component } from 'react'

// export default class SimplerComponent extends Component {

// 	handleClick = event => { 

//   	}
 
//   render() {
//     return (
//       <div onClick={this.handleClick}>
//       	"I am just happy"  
//       </div>
//     )
//   }
 

// }

import React from 'react'
 
const SimplerComponent = ({handleClick}) => {
  return (
    <div onClick={handleClick} >
    	"I am just happy"
    </div>
  )

}
 
export default SimplerComponent