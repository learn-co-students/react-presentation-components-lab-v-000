import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';


handlePrint = () => {
  console.log("working")
}


ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.handlePrint} />
  </div>,
  document.getElementById('root')
);
