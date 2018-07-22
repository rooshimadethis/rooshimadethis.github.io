import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import indexRoutes from "./routes/index.jsx";

let hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            {indexRoutes.map((prop, key) => {
                return <Route path={prop.path} key={key} component={prop.component} />;
            })}
        </Switch>
    </Router>,
    document.getElementById('root')
);
