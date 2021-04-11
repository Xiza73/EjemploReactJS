import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import mayLogo from '../images/30b.jpg';

class Bootstrap extends React.Component {
    render() {
        const cardStyle = {
            width: '18rem'
        }
        return (
            <div>
                <div className="card" style={cardStyle}>
                    <img src={mayLogo} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">npm install jquery popper.js bootstrap</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="index.html" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bootstrap;