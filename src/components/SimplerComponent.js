import React from 'react'

const SimplerComponent = () => {
    this.handleClick = () => {
        return(
            <p>Still happy</p>
        )
    }

    
    return(
        <div onClick={this.handleClick()}>
            I am just happy
        </div>
    )
}

export default SimplerComponent;