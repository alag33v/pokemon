import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from './assets/images/logo.png';
import { PokemonItem } from './components';
import { Home } from './pages';
import { GlobalStyle } from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';

export const App = () => (
  <Router>
    <GlobalStyle />
    <StyledApp>
      <img className="logo" src={logo} alt="Logo" />
      <Switch>
        <Route exact path="/pokemon" component={Home} />
        <Route exact path="/pokemon/:id" component={PokemonItem} />
      </Switch>
    </StyledApp>
  </Router>
);
