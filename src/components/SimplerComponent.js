import React from 'react';

const handleClick = (event) => {
    event.target.innerHTML = 'Very happy!'
}

const SimplerComponent = (props) => {
    return (
        <div id="happy-text" onClick={props.handleClick}>
            I am just happy
        </div>
    )
}

export default SimplerComponent;