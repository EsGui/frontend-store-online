import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AnnouncementPage from './Pages/AnnouncementPage';
import AnnouncePage from './Pages/AnnouncePage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import ProductCartPage from './Pages/ProductCartPage';
import ProductFavoritePage from './Pages/ProductFavoritePage';
import ProductSpecificPage from './Pages/ProductSpecificPage';
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
          <Route path="/productannounce" component={ AnnouncePage } />
          <Route path="/productfavorite" component={ ProductFavoritePage } />
          <Route path="/productspecific/:id" render={ (props) => <ProductSpecificPage { ...props } /> } />
          <Route path="/productcart" component={ ProductCartPage } />
        </Switch>
      </BrowserRouter>
    )
  }
  
  export default Router;