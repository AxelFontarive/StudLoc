import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import { DbUtils } from '../../js/utils';
import { Auth } from '../../js/authentication';
import { db } from '../../js/database'
import { firestore } from 'firebase';

function Reservation(props) {
    let history = useHistory();
    let {logementId} = useParams();

    const [logement, setLogement] = useState({});
    const [resaInfo, setResaInfo] = useState({
        dateDebut : null,
        dateFin : null
    })
    const [success, setSuccess] = useState(null)

    useEffect(() => {
        DbUtils.getDocumentById("Logement", logementId).then(l => {
            if (!l) {
                history.push(('/notfound'));
            } else {
                setLogement(l);
            }
        }).catch(err => console.error(err));
    }, [])

    function HandleFieldChange(e) {
        setResaInfo({
            ...resaInfo,
            [e.target.name] : e.target.value
        });
    }

    function HandleSubmit(e){
        e.preventDefault();

        const dbData = {
            ID : DbUtils.generatePseudoRandomId(),
            LogementID : logementId,
            UserID : Auth.currentUser.ID,
            LogementName : logement.Nom,
            DateDebut : firestore.Timestamp.fromDate(new Date(resaInfo.dateDebut)),
            DateFin : firestore.Timestamp.fromDate(new Date(resaInfo.dateFin))
        }

        console.log(dbData);
        db.collection("Reservation").doc().set(dbData).then(() => {
            setSuccess(true);
        }).catch(err => {
            console.error(err);
            setSuccess(false);
        });
    }

    return (
        <div>
            <div className="title-wrapper">
                <h2>Réservation du logement : {logement.Nom}</h2>
            </div>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>Date de début : </label>
                    <input type="date" name="dateDebut" required onChange={HandleFieldChange}/>
                </div>
                <div>
                    <label>Date de fin : </label>
                    <input type="date" name="dateFin" required onChange={HandleFieldChange}/>
                </div>
                <div>
                    <input type="submit" value="Réserver !"/>
                </div>
                <div>
                    {success === true ? (<p>Réservation effectuée. Visualisez-la sur <Link to="/profil">votre profil</Link>.</p>) : success === false ? "Échec de la réservation. Retentez plus tard." : ""}
                </div>
            </form>
        </div>
    )
}

export default Reservation;