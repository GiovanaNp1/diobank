  import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import Pagamentos from './pages/Pagamentos';
import Perfil from './pages/Perfil/perfil';
import Import from './pages/Imports';

const Routes = () => {
  return (
    <BrowserRouter>
    <Route component={LandingPage} path="/" exact/>
      <Route component={Home} path="/home" exact />
      <Route component={Pagamentos} path="/pagamentos" exact />
      <Route component={Perfil} path="/perfil" exact />
      <Route component={Import} path="/imports"extract/>
    </BrowserRouter>
  );
}

export default Routes;
