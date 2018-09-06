import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

// function handleClick2() {
// 	alert("this function was passed as a prop from index.js")
// }

ReactDOM.render(

	<div>
		<SimpleComponent />
		{/* <SimplerComponent handleClick={() => handleClick2()} */}
		<SimplerComponent handleClick={undefined}
		/>
	</div>,
	document.getElementById('root')
);
