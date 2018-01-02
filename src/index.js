import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const logIt =() =>{
  console.log("you clicked!");
  console.log(this);
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={logIt} />
  </div>,
  document.getElementById('root')
);

