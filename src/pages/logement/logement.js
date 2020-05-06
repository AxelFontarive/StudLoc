import React, { useState, useEffect } from 'react'
import { CodeUtils, DbUtils } from "../../js/utils";
import { useParams, useHistory } from 'react-router-dom';

function Logement(){
    let history = useHistory();
    let {logementId} = useParams();

    const [logement, setLogement] = useState({})

    useEffect(() => {
        var logement = DbUtils.getDocumentById("Logement", logementId).then(l => {
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
            </div>
            <div className="description-wrapper">
                <h4>Note : {logement.Note} / 5</h4>
                <p>Adresse : {logement.Rue}, {logement.CodePostal} {logement.Ville}</p>
                <p>Prix : {logement.PrixMois} € par mois, {logement.PrixSemaine} € par semaine.</p>
                <p>Surface : {logement.Surface} m² ({logement.NbPiece} pièces)</p>
            </div>
        </div>
    )
}

export default Logement;