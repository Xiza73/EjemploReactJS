import { Component } from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './js/nav';



class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/profile">React</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/profile">Evento Perfil</Link>
                        <Link className="nav-link" to="/profiles">Perfiles</Link>
                        <Link className="nav-link" to="/form">Form</Link>
                        <Link className="nav-link" to="/props">Props</Link>
                        <Link className="nav-link" to="/router">Router</Link>
                        <Link className="nav-link" to="/bootstrap">Bootstrap</Link>
                        <Link className="nav-link" to="/ciclo-vida">Ciclo Vida</Link>
                        <Link className="nav-link" to="/poke-api">Poke Api</Link>
                        <Link className="nav-link" to="/styles">Styles</Link>
                        <Link className="nav-link" to="/404">404</Link>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;