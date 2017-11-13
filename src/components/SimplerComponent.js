import React from 'react';

const SimplerComponent = (props) => {

    return (
        <div onClick={props.handleClick}>
            {props.mood}
        </div>
    )
}

SimplerComponent.defaultProps = {
    mood: ["I am just happy"]
}

export default SimplerComponent;