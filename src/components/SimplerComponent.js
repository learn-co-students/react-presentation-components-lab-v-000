import React from 'react';

const mood = 'I am just happy';

const SimplerComponent = (props) => 
    <div onClick={props.handleClick}>
        {mood}
    </div>;

export default SimplerComponent;    