import React from 'react'
import '../css/profil.css';
import IconeProfil from '../images/IconeProfil.png';

function Profil(){
    return(
        <div>
            <h1>Quentin bois plus et Guillaume fume mieux</h1>
            <img class="fit-picture" src={IconeProfil} alt="Image de profil non trouvé"></img>
            <section>
                <label>NOM PRENOM - Age</label>
            </section>
            <section class="rating rating2">
                <a href="#5" title="Donner 5 étoiles">★</a>
                <a href="#4" title="Donner 4 étoiles">★</a>
                <a href="#3" title="Donner 3 étoiles">★</a>
                <a href="#2" title="Donner 2 étoiles">★</a>
                <a href="#1" title="Donner 1 étoiles">★</a>
            </section>
        </div>
    )
}


export default Profil