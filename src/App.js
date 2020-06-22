import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { firebase } from './js/database';
import { Auth } from './js/authentication';
import { DbUtils } from './js/utils';
import logo from './logo.svg';
import './css/top-bar.css';
import Recherche from './pages/Recherche';
import Profil from './pages/Profil';
import Login from './pages/auth/login';
import Logout from './pages/auth/logout';
import ListeLogement from './pages/logement/listeLogement';
import Logement from './pages/logement/logement';
import NotFound from './pages/notfound';
import Reservation from './pages/reservation/reservation';


function App() {
  const [connected, setConnected] = useState(false);

  function listenForAuthChanges() {
    // Ajout d'un listener pour reconnecter l'utilisateur si la page est rechargée.
    firebase.auth().onAuthStateChanged(usr => {
      if (usr) {
        DbUtils.getUserByAuthUid(firebase.auth().currentUser.uid).then(u => {
          Auth.currentUser = u;
          Auth.isUserConnected = true;
  
          console.log(Auth.currentUser);
          setConnected(true);
        });
      } else {
        setConnected(false);
      }
    })
  }

  useEffect(() => {
    listenForAuthChanges();
  }, []);

  return (
    <Router>
      <div id="top-bar">
        <div id="logo-container">
          <img src={logo} id="logo" alt="Logo StudLoc" />
          <Link className="link-big" to="/">StudLoc</Link>
          <Link className="link" to="/recherche">Rechercher</Link> |
          <Link className="link" to="/logements">Logements</Link> |
          <Link className="link" to="/apropos">À propos</Link>
          <div id="profile-container">
            {connected ? (
              <>
                <Link className="link" to="/logout">Déconnexion</Link>
                <Link className="link" to="/profil">Profil</Link>
              </>
            ) : (
              <Link className="link" to="/login">Connexion</Link>
            )}
          </div>
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
            <Recherche></Recherche>
        </Route>
        <Route path="/logements" exact>
          <ListeLogement>

          </ListeLogement>
        </Route>
        <Route path="/apropos">
          <div>
            <h2>Remplacer par un Component React : À Propos</h2>
          </div>
        </Route>
        <Route path="/profil">
            <Profil/>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/logements/:logementId" children={<Logement/>} exact></Route>
        <Route path="/logements/:logementId/reservation" exact>
          <Reservation/>
        </Route>
        <Route path="/notfound">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
