import React, { Component } from 'react';

class Plus extends Component {
    render() {
        const { input1, input2, setResoult } = this.props
        const plus = () => {
            setResoult(+input1 + +input2)
        }
        return (
            <div>
                <button onClick={plus}>+</button>
            </div>
        );
    }
}

export default Plus;
