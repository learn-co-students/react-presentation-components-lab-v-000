import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const displaySublime = () => {
	return(
		<div>Hello</div>
	)
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={this.displaySublime} />
  </div>,
  document.getElementById('root')
);