import React from 'react';

import logo from './assets/images/logo.png';
import { Home } from './pages';
import { GlobalStyle } from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';

export const App = () => (
  <>
    <GlobalStyle />
    <StyledApp>
      <img className="logo" src={logo} alt="Logo" />
      <Home />
    </StyledApp>
  </>
);
