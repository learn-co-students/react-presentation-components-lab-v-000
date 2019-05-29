// Code SimplerComponent Here
import React, { Component } from 'react';

// let SimplerComponent = (Component) => {
// 	// render() {
// 	let handleClick = (e) => {
// 		'I am just happy';
// 	};
// 	return <div onClick={(e) => handleClick(e)}> I am just happy</div>;
// 	// }
// };
const SimplerComponent = (props) => <div onClick={props.handleClick}>I am just happy.</div>;
export default SimplerComponent;
