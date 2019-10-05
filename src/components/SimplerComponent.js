// Code SimplerComponent Here

import React from 'react';



const SimplerComponent = function() {

    const handleClick = () => {
        console.log("Really happy")
      }

    return (
        <div onClick={console.log("Balls")}>
            I am just happy
        </div>
    )
}

export default SimplerComponent