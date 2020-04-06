import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import './css/top-bar.css';

function App() {
  return (
    <Router>
      <div id="top-bar">
        <div id="logo-container">
          <img src={logo} id="logo" alt="Logo StudLoc" />
          <Link className="link-big" to="/">StudLoc</Link>
          <Link className="link" to="/recherche">Rechercher</Link> |
          <Link className="link" to="/logements">Logements</Link> |
          <Link className="link" to="/apropos">À propos</Link>
        </div>
      </div>
      
      <Switch>
        <Route path="/" exact>
          <div>
            <h2>Remplacer par un Component React : Home</h2>
            À placer dans <i>src/pages/home</i>.
          </div>
        </Route>
        <Route path="/recherche">
          <div>
            <h2>Remplacer par un Component React : Recherche</h2>
          </div>
        </Route>
        <Route path="/logements">
          <div>
            <h2>Remplacer par un Component React : Liste des logements</h2>
            À placer dans <i>src/pages/logement</i>.
          </div>
        </Route>
        <Route path="/apropos">
          <div>
            <h2>Remplacer par un Component React : À Propos</h2>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
