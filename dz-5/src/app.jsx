import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import './app/styles/app.css';
import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';
import PageNotFound from './app/pages/PageNotFound';
import Users from './app/pages/Users';
import User from './app/pages/User';
import JMainLayout from './app/components/mainlayout';
import JHomePage from './app/components/homepage';
import JBlogPage from './app/components/blogpage';
import JCard from './app/components/card';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={JMainLayout}>
          <IndexRoute component={JHomePage}/>
          <Route path="users" component={Users}>
            <Route path=":userId" component={User}/>
          </Route>
          <Route path="blogs" component={JBlogPage}>
            <Route path=":blogId" component={JCard}/>
          </Route>
          <Route path="comments" component={PageNotFound}>
          </Route>
          <Route path="*" component={PageNotFound}/>
        </Route>
    </Router>,
app);
