import React from 'react';

import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import logo from './assets/images/logo.png';
import { PokemonItem, PokemonAbility } from './components';
import { Home } from './pages';
import { GlobalStyle } from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';

export const App = () => (
  <Router>
    <GlobalStyle />
    <StyledApp>
      <Link className="link" to="/pokemon">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <Switch>
        <Route exact path="/pokemon" component={Home} />
        <Route exact path="/pokemon/:id" component={PokemonItem} />
        <Route exact path="/ability" component={PokemonAbility} />
      </Switch>
    </StyledApp>
  </Router>
);
