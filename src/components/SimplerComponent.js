import React from 'react';

const SimplerComponent  = (props) => {
    const { handleClick } = props
    return (
        <div onClick={handleClick} >
            I am just happy
        </div>
    )
}

export default SimplerComponent;
