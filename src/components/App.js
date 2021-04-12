import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* COMPONENTS */
import Layout from './Layout';
import NotFound from './NotFound';
import MainProfile from '../pages/MainProfile';
import Profiles from '../pages/Profiles';
import ReactRouter from './ReactRouter';
import Props from './prop/Props';
import Form from './eventos-form/Form';
import Bootstrap from './Bootstrap';
import CicloVida from '../pages/CicloVida';

function App(){
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/profile" component={MainProfile} />
                    <Route exact path="/profiles" component={Profiles} />
                    <Route exact path="/props" component={Props} />
                    <Route exact path="/form" component={Form} />
                    <Route exact path="/router" component={ReactRouter} />
                    <Route exact path="/bootstrap" component={Bootstrap} />
                    <Route exact path="/ciclo-vida" component={CicloVida} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;