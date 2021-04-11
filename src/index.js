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
import MainProfile from './pages/MainProfile';
import Profiles from './pages/Profiles';


const container = document.getElementById('root');

ReactDOM.render(<Profiles />, container);
//ReactDOM.render(<Form />, container);

