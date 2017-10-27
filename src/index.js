import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

var alert = () => {
  alert("You have just clicked the simpler component");
}
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.alert} />
  </div>,
  document.getElementById('root')
);