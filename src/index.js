import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap';
import './index.css';

/*Components*/
/*
import JSX from './components/JSX';
import Profile from './components/Profile';
import Bootstrap from './components/Bootstrap';
import Form from './components/eventos-form/Form';
*/
import App from './components/App';


const container = document.getElementById('root');

ReactDOM.render(<App />, container);
//ReactDOM.render(<Form />, container);

