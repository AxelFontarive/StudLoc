import React from 'react'
import '../../css/itemLogement.css'
import { useHistory } from 'react-router-dom';

function ItemLogement(props) {

    var history = useHistory();

    function onTitleClick(){
        history.push("/logements/"+props.ID)
    }
    return (
        <div className="item-container">
            <div className="item-details-wrapper">
                <h3 onClick={onTitleClick}>
                    {props.Nom}
                </h3>
                <p>À {props.Ville}</p>
                <p>{props.Note}/5</p>
                <p>Prix : {props.PrixSemaine}€/Semaine</p>
            </div>
        </div>
    )

}


export default ItemLogement