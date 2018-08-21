import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

    function getDateTime() {
      console.log('getDateTime = ', Date.now())
    }


ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={getDateTime} />
  </div>,
  document.getElementById('root')
);