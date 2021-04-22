import React from 'react';
import { Link } from 'react-router-dom';

import Modal from './Modal';

import 'bootstrap/dist/css/bootstrap.css'

class ReactRouter extends React.Component {
    render() {
        const cardStyle = {
            width: '18rem'
        }
        return (
            <React.Fragment>
                <div className="card" style={cardStyle}>
                    <div className="card-body">
                        <h5 className="card-title">npm install react-router-dom</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/router" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Modal</Link>
                        <Modal isOpen={true}>Modal 1</Modal>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ReactRouter;