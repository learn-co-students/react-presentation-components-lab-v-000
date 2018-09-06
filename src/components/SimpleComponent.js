// Code SimpleComponent Here
import React from 'react'
 class SimpleComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mood: 'happy',
        }
    }
    
     handleClick = () => {
        if (this.state.mood === 'happy') {
            this.setState({ mood: 'sad' });
        } else {
            this.setState({ mood: 'happy' });
        }
    }
     render() {
        return (
            <div onClick={this.handleClick}><h1>{this.state.mood}</h1></div>
        );
    }
}
 export default SimpleComponent; 
     

