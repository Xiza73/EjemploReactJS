import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="index.html">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link active" href="index.html">Home <span className="sr-only">(current)</span></a>
                <a className="nav-link" href="index.html">Features</a>
                <a className="nav-link" href="index.html">Pricing</a>
                <a className="nav-link disabled" href="index.html" tabIndex="-1" aria-disabled="true">Disabled</a>
                </div>
            </div>
            </nav>
        );
    }
}

export default Navbar;