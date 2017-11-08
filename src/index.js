import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


ReactDOM.render(  
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={function(){alert('wow you click the div')}} />
  </div>,
  document.getElementById('root')
);