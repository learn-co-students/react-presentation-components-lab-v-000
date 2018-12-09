// Code SimplerComponent Here
import React from 'react'




let mood = "I am just happy"



const simplerComponent = (props) => {
    return (
        <div onClick={props.handleClick()}>{mood}</div>
    )

}

export default simplerComponent;