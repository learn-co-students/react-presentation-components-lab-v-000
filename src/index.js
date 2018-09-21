import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';



ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={ () => alert("I'm so happy I got clicked!") } />
  </div>,
  document.getElementById('root')
);
