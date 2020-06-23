import React, { useState, useEffect } from 'react'
import { CodeUtils, DbUtils } from "../../js/utils";
import { useParams, useHistory, Link } from 'react-router-dom';
import { Auth } from '../../js/authentication';

function Logement(){
    let history = useHistory();
    let {logementId} = useParams();

    const [logement, setLogement] = useState({})

    useEffect(() => {
        DbUtils.getDocumentById("Logement", logementId).then(l => {
            if (!l) {
                // Pas de logement trouvé, 404.
                history.push('/notfound');
            } else {
                setLogement(l);
            }
        }).catch(err => {
            console.error(err);
        })
    }, []);

    return (
        <div>
            <div className="title-wrapper">
                <h2>{logement.Nom}</h2>
                {Auth.isUserConnected ? <Link to={"/logements/" + logementId + '/reservation'}>Réserver</Link> : <p><Link to="/login">Connectez-vous</Link> pour réserver.</p>}
                
            </div>
            <div className="description-wrapper">
                <h4>Note : {logement.Note} / 5</h4>
                <p>Type : {logement.Type}, {logement.NbResidents} personnes max.</p>
                <p>Adresse : {logement.Rue}, {logement.CodePostal} {logement.Ville}</p>
                <p>Prix : {logement.PrixMois} € par mois, {logement.PrixSemaine} € par semaine.</p>
                <p>Surface : {logement.Surface} m² ({logement.NbPiece} pièces)</p>
                <p>Restrictions : {logement.Fumeur ? "Fumeurs autorisés" : "Non fumeur"}, {logement.ServiceExtraInclus ? "Tous services compris" : "Services payants"}</p>
            </div>
        </div>
    )
}

export default Logement;