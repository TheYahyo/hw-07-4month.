import React, { Component } from 'react';

class Delenie extends Component {
    render() {
        const { input1, input2, setResoult } = this.props
        const delenie = () => {
            setResoult(+input1 / +input2)
        }
        return (
            <div>
                <button onClick={delenie}>/</button>
            </div>
        );
    }
}


export default Delenie;
