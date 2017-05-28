import React from 'react';

function handleClick() {
    alert("I am happy!")
};

export default function DumberComponent(props){
  return (
    <div onClick={props.handleClick}>I am just happy</div>
  )
};
