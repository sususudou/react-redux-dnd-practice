import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <button onClick={() => this.props.h()}>
                {this.props.count}
            </button>
        );
    }
}

export default Counter;