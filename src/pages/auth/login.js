import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  const [loginState, setLoginState] = useState({
    email : undefined,
    password : undefined,
  });

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
    // TODO : Ajouter une instruction de connexion Firebase.
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
          </form>
        </div>
      </div>

      <div id="register-container">
          Pas encore inscrit ? <Link to="/register">Créer un compte</Link> !
      </div>
    </div>
  )
}