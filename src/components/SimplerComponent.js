// Code SimplerComponentHere Here
import React from 'react'

function handleClick(){
	console.log('success')
}

const SimplerComponent = ({handleClick}) => {
	
	return <div onClick={handleClick}>I am just happy</div>
}

export default SimplerComponent