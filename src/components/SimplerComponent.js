import React from 'react' 

const SimplerComponent = (props) => {
    console.log(props)
    // debugger

    return (
        <div onClick={props.handleClick}>I am just happy.</div>
    )

}

export default SimplerComponent
