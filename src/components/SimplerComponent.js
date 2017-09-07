import React from 'react';
import PropTypes from 'prop-types';

const SimplerComponent = ({handleClick}) => {
  return (
    <div className="simpler" onClick={handleClick}>
      I am just happy
    </div>
  );
}

SimplerComponent.defaultProps = {
  handleClick: function() {console.warn('Make sure to pass a handleClick prop to SimplerComponent')}
}

SimplerComponent.propTypes = {
  handleClick: PropTypes.func
}

export default SimplerComponent;