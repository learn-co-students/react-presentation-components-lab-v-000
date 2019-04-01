// Code SimplerComponent Here
import React from 'react'

// class SimplerComponent extends React.Component {

//   handleClick = () => {
//     alert('So happy')
//   }

//   render() {
//     return(
//       <div onClick={this.handleClick}>
//         I am just happy
//       </div>
//     )
//   }
// }

const SimplerComponent = (props) => (
  // debugger
  <div onClick={props.handleClick}>
    I am just happy
  </div>
)

export default SimplerComponent