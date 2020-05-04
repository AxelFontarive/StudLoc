import React from 'react';
import { useHistory } from "react-router-dom";
import { firebase } from '../../js/database';
import { Auth } from '../../js/authentication';

export default function Logout() {
  var history = useHistory();

  // Déconnexion Firebase
  firebase.auth().signOut().then(() => {
    // Retour au menu principal
    Auth.isUserConnected = false;
    Auth.currentUser = undefined;

    console.log("Logged out !");
    history.push("/")
  }).catch(err => {
    console.error("Failed to log out !");
    console.error(err);
  })

  return (
    <div>
      <h1>Déconnexion en cours...</h1>
      <i>Veuillez patienter, vous serez automatiquement redirigé</i><br/>
      <i>à la fin du processus.</i>
    </div>
  )
}