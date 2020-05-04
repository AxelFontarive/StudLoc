import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { firebase } from '../../js/database';
import { DbUtils } from '../../js/utils';
import { Auth } from '../../js/authentication'

export default function Login() {
  var history = useHistory();

  const [loginState, setLoginState] = useState({
    email : undefined,
    password : undefined,
  });

  const [error, setError] = useState(null);
  const errorCodes = {
    "auth/user-not-found" : "Utilisateur non trouvé.",
    "auth/wrong-password" : "Mot de passe incorrect."
  }

  function fieldChangedEventHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLoginState({
      ...loginState,
      [name]: value
    });
  }

  function onSubmitEventHandler(event) {
    event.preventDefault();
    
    // Authentification Firebase
    firebase.auth().signInWithEmailAndPassword(loginState.email, loginState.password).then(() => {
      console.log("Logged in !");

      // Ajout des infos utilisateurs (prises dans la DB) dans la classe Auth.
      DbUtils.getUserByAuthUid(firebase.auth().currentUser.uid).then(u => {
        Auth.currentUser = u;
        Auth.isUserConnected = true;

        console.log(Auth.currentUser);
        history.push('/');
      });

    }).catch(err => {
      console.error("Failed to log in !")
      console.error(err);
      setError(errorCodes[err.code] || "Une erreur s'est produite. Veuillez réessayer plus tard.");
    })
  }

  return (
    <div>
      <div id="login-container">
        <h1>Se connecter</h1>
        <div id="form-container">
          <form onSubmit={onSubmitEventHandler}>
            <div>
              <label>Email : </label>
              <input type="email" name="email" onChange={fieldChangedEventHandler} required/>
            </div>
            <div>
              <label>Mdp : </label>
              <input type="password" name="password" onChange={fieldChangedEventHandler} required/>
            </div>

            <input type="submit"/>
              {error != null ? <p>Erreur ! {error}</p> : <p></p>}
          </form>
        </div>
      </div>

      <div id="register-container">
          Pas encore inscrit ? <Link to="/register">Créer un compte</Link> !
      </div>
    </div>
  )
}