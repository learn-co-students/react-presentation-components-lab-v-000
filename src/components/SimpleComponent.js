import React from 'react'

class SimpleComponent extends React.Component {
    state = {
        mood : 'happy'
    }

    handleClick = () => {
        this.state.mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})

        //This works too...
        // this.setState({
        //     mood: (this.state.mood === 'happy') ? 'sad' : 'happy'
        // })
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent 