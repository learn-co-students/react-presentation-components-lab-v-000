import React from 'react'

const SimplerComponent = props => {

	
	return (
		<div onClick={ props.handleClick() } className={'change-color'}>
			I am just happy
		</div>
	)
}

export default SimplerComponent
