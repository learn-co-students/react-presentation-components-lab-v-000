// // Code SimplerComponentHere Here
// import React from 'react'
// const defaultMood = 'I am just happy'
//
//
// const SimplerComponent = (props) =>
//     <div>
//       {defaultMood}
//       <button onClick={props.handleClick}>{defaultMood}</button>
//     </div>
//
//
// export default SimplerComponent;

import React from 'react';


const SimplerComponent = props => <div onClick={props.handleClick}>I am just happy.</div>;

export default SimplerComponent;
