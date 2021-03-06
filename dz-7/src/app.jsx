import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

//Связка redux - react
import {Provider} from 'react-redux';
//store
import store from './app/store';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';
import Posts from './app/pages/Posts';


const app = document.getElementById('app');


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Layout}>
                <IndexRoute component={MainPage}/>
                <Route path="users" component={Users}>
                    <Route path=":userId" component={User}/>
                </Route>
                <Route path="posts" component={Posts}/>
                <Route path="*" component={PageNotFound}/>
            </Route>
        </Router>
    </Provider>,
    app);
