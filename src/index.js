import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

//didn't need an alias, which is basically a shorthand method, to access the css file.

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent 
      handleClick={() =>
        console.log('yahoo!')
      }
    />
  </div>,
  document.getElementById('root')
);