import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={() => alert('I am stable and predictable because as a stateless functional component, I CANNOT change my output internally!')} />
  </div>,
  document.getElementById('root')
);