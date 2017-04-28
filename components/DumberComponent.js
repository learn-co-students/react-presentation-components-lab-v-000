import React from 'react'

export default function DumberComponent(props) {
  const { handleClick } = props 
  return (
    <div onClick={handleClick}>'I am just happy.'</div>
  )
}
