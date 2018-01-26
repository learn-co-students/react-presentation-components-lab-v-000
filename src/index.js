import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={ 
      (event) =>{
        event.target.innerHTML === "I am just happy." ? event.target.innerHTML = "I am just sad." : event.target.innerHTML = "I am just happy."}
    } />
  </div>,
  document.getElementById('root')
);


