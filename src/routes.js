import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './components/App';
import MainPage from './components/MainPage';
import AboutUser1 from './components/AboutUser1';
import AboutUser2 from './components/AboutUser2';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/register" component={AboutUser1} />
    <Route path="/register/second" component={AboutUser2} />
  </Route>
)