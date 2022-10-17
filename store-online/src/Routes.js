import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnnouncementPage from './Pages/AnnouncementPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterUserPage from './Pages/RegisterUserPage';
import UserLogged from './Pages/UserLogged';

function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ HomePage } />
          <Route path="/login" component={ LoginPage } />
          <Route path="/register" component={ RegisterUserPage } />
          <Route path="/userlogged" component={ UserLogged } />
          <Route path="/announcement" component={ AnnouncementPage } />
        </Switch>
      </BrowserRouter>
    )
  }
  
  export default Router;