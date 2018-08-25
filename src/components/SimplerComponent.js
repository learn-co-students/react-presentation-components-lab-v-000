// Code SimplerComponent Here
import React from 'react';

const moodState = "I am just happy"

const handleClick = () => "I am just sad"

const SimplerComponent = (props) => <div onClick={props.handleClick}> I am just happy </div>

export default SimplerComponent;
