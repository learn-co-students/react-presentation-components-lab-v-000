import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

this.handleClick = () => {
  console.log("No more, no less.")
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.handleClick} />
  </div>,
  document.getElementById('root')
);
