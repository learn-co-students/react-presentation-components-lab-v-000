import React from 'react';

const handleClick = () => console.log('I am still just happy.')

const SimplerComponent = ({ handleClick }) => <div onClick={handleClick}>'I am just happy.'</div>

export default SimplerComponent;
