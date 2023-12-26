import React, { Component } from 'react';

class Umnojenie extends Component {
    render() {
        const { input1, input2, setResoult } = this.props
        const umnojenie = () => {
            setResoult(+input1* +input2)
        }
        return (
            <div>
                <button onClick={umnojenie}>*</button>
            </div>
        );
    }
}

export default Umnojenie;
