import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';



ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={
      (event) =>{
        debugger
        event.target.innerHTML = "Now I am even happier!"
      }
    } />
  </div>,
  document.getElementById('root')
);