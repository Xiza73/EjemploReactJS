import React from 'react';

class JSX extends React.Component {
    render() {
        const vari = 'Mi variable';
        const func = () => `Mi función ${5 + 5}`;

        return (
            <div>
                <h1>Element JSX</h1>
                <p>{vari}</p>
                <p>{func()}</p>
            </div>
        );
    }
}

export default JSX;