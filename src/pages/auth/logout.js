import React from 'react';
import { useHistory } from "react-router-dom";


export default function Logout() {
    var history = useHistory();

    // TODO : Remplacer la ligne suivante par une instruction de
    // déconnexion Firebase.
    setTimeout(() => history.push("/"), 3000);

    return (
        <div>
            <h1>Déconnexion...</h1>
            <i>Veuillez patienter, vous serez automatiquement redirigé</i><br/>
            <i>à la fin du processus.</i>
        </div>
    )
}