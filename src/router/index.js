import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Tast from '../backend/index.js';
import Home from '../page/home';
import Shop from '../page/shop';

function MyRoute(props) {
    return (
        <Router>
            <Switch>
                <Route path={`/tast`}>
                    <Tast />
                </Route>
                <Route path={`/:shop_id`}>
                    <Shop />
                </Route>
                <Route path={`/`}>
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default MyRoute;