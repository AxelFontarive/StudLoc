import React from 'react'

function Recherche(){
    return(
        <div>
            <h1>Rechercher un logement</h1>
            <section>
                <label>Choisissez une ville : </label>
                <input type="text" name="city"></input>
            </section>
            <br></br>
            <section>
                <label>Distance autour de votre zone de recherche : </label>
                <select name="around">
                    <option value="0km">0 km</option>
                    <option value="5km" selected>5 km</option>
                    <option value="10km">10 km</option>
                    <option value="20km">20 km</option>
                </select>
            </section>
            <br></br>
            <section>
                <label>Type de logement : </label>
                <input type="checkbox" id="appartement" name="appartement" checked></input> <label for="appartement">Appartement</label>
                <input type="checkbox" id="maison" name="maison"></input> <label for="maison">Maison</label>
            </section>
            <br></br>
            <section>
                <label>Nombre de pièces : </label>
                <br></br>
                <input type="checkbox" id="2pieces" name="2pieces" checked></input> <label for="2pieces">2 pièces</label>
                <input type="checkbox" id="3pieces" name="3pieces"></input> <label for="3pieces">3 pièces</label>
                <input type="checkbox" id="4pieces" name="4pieces"></input> <label for="4pieces">4 pièces</label>
            </section>
            <br></br>
            <section>
                <button>Rechercher</button>
            </section>
        </div>
    )
}


export default Recherche