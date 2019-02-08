import React, {Component} from 'react'

class SimpleComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mood:'happy'
        }
    }

    handleClick=()=> {
        if (this.state.mood ==='happy') {
            this.setState({mood: 'sad' })
        } else if (this.state.mood ==='sad') {
            this.setState({mood: 'happy'})
        }
    }
    
    render() {
        return (
            <div id="mood-div" onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }

}

export default SimpleComponent;