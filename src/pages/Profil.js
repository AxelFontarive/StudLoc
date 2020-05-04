import React, { useState, useEffect } from 'react'
import '../css/profil.css';
import { Auth } from '../js/authentication';
import { useHistory } from 'react-router-dom';

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
                <span id="role">{user.Role}</span>
            </div>
        </div>
    )
}


export default Profil