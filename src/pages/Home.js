import React from 'react'
import '../css/home.css';


function Home(){

    return(
        <div>
            <section>
                <h1 id="TitreHome">Trouvez dès maintenant le logement qui vous correspond</h1>
                <div id="gauche" class="BordureDiv">
                    <div id="ImageHome1"></div>
                    <p class="SousTitre">Voir liste des logements</p>
                </div>
                <div id="centre" class="BordureDiv">
                    <div id="ImageHome2"></div>
                    <p class="SousTitre">Recherchez un logement</p>
                </div>
                <div id="droite" class="BordureDiv">
                    <div id="ImageHome3"></div>
                    <p class="SousTitre">Suivez vos réservations</p>
                 </div>
            </section>
        </div>
    )
}


export default Home