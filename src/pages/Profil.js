import React, { useState, useEffect } from 'react'
import '../css/profil.css';
import { Auth } from '../js/authentication';
import { useHistory } from 'react-router-dom';

import { CodeUtils } from "../js/utils";
import ListeReservation from './reservation/listeReservation';

function Profil(){
    var history = useHistory();

    const [user, setUser] = useState({});

    useEffect(() => {
        if (!Auth.isUserConnected) {
            history.push('/login');
        } else {
            let user = Auth.currentUser;
            user.Role = user.Role.toUpperCase();

            setUser(user);
        }
    }, [])

    return(
        <div>
            <div className="username-wrapper">
                <span>
                    <h2 className="username">{user.Nom} {user.Prenom}</h2>
                </span>
                <span id="role" className={user.Role}>{user.Role}</span>
            </div>
            <div className="details-wrapper">
                <p>Adresse mail : {user.Email}</p>
                <p>Date de naissance : {CodeUtils.toShortDate(user.DateNaissance)}</p>
                <p>Adresse : {user.Rue}, {user.CP} {user.Ville}</p>
            </div>
            <div className="resa-wrapper">
                <h3>Vos réservations</h3>
                <div className="resa-list-wrapper">
                    <ListeReservation key={user.ID} user={user}/>
                </div>
            </div>
        </div>
    )
}


export default Profil