import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterUserPage from './Pages/RegisterUserPage';

function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/login" component={ LoginPage } />
          <Route path="/register" component={ RegisterUserPage } />
        </Switch>
      </BrowserRouter>
    )
  }
  
  export default Router;