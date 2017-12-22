import React from 'react';
import PropTypes from 'prop-types';

const SimplerComponent = ({ handleClick }) => (
  <div onClick={handleClick}>I am just happy</div>
);

SimplerComponent.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default SimplerComponent;
