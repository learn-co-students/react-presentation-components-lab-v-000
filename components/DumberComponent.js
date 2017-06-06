import React from 'react'

function defaultClick() {
  console.log("hi!")
}

export default function DumberComponent(props) {

  return (
    <div onClick={props.handleClick || defaultClick}>I am just happy</div>
  )
}
