// Code SimpleComponent Here
// import React from 'react';
import React from 'react';
export default class SimpleComponent extends React.Component {
    constructor() {
        super();
        this.state = { mood: 'happy' };
    }

    changeMood = () => {
        this.setState({ mood: 'sad' });
    }

    render() {
        return (
            <div onClick={this.changeMood}>
                {this.state.mood}
            </div>
        )
    }
}

