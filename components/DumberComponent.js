import React from 'react';

const DumberComponent = (props) => {
  return <div onClick={props.handleClick}>I am just happy.</div>
};

export default DumberComponent;

// export default function DumberComponent(props) {
//   return (
//     <div onClick={props.handleClick}>I am just happy.</div>
//   );
// }
