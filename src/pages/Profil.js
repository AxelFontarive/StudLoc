import React from 'react'
import '../css/profil.css';

function Profil(){
    return(
        <div>
            <h1>Quentin bois plus et Guillaume fume mieux</h1>
            <img class="fit-picture" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYZWKOl3X6dgmU4J64gpnBPqk9p-14y9Pvkzqop8eZaFkHPmkQ&usqp=CAU" alt="Image de profil non trouvé"></img>
            <section>
                <label>NOM PRENOM - Age</label>
            </section>
            <section class="rating rating2">
                <a href="#5" title="Give 5 stars">★</a>
                <a href="#4" title="Give 4 stars">★</a>
                <a href="#3" title="Give 3 stars">★</a>
                <a href="#2" title="Give 2 stars">★</a>
                <a href="#1" title="Give 1 star">★</a>
            </section>
        </div>
    )
}


export default Profil