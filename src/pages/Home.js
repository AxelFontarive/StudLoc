import React from 'react'
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import '../css/home.css';


function Home(){

    return(
        <div>
            <section>
                <h1 id="TitreHome">Trouvez dès maintenant le logement qui vous correspond</h1>
                <div id="gauche" className="BordureDiv">
                    <div id="ImageHome1"></div>
                    <p className="SousTitre"><Link to="/logements">Liste de logements</Link></p>
                </div>
                <div id="centre" className="BordureDiv">
                    <div id="ImageHome2"></div>
                    <p className="SousTitre"><Link to="/recherche">Recherchez un logement</Link></p>
                </div>
                <div id="droite" className="BordureDiv">
                    <div id="ImageHome3"></div>
                    <p className="SousTitre"><Link to="/profil">Suivez vos réservations</Link></p>
                 </div>
            </section>
        </div>
    )
}


export default Home