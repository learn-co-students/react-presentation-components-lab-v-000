import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent handleClick={ "I am just happy" }/>
    <SimplerComponent handleClick={undefined} />
  </div>,
  document.getElementById('root')
);
