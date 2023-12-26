import React, { Component } from 'react';

class Minus extends Component {
    render() {
        const { input1, input2, setResoult } = this.props;
        const Minus = () => {
            setResoult(+input1 - +input2)

        }
        return (
            <div>
                <button onClick={Minus}>-</button>
            </div>
        );
    }
}
export default Minus;
