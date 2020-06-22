import React from 'react';
import '../../css/itemLogement.css'
import { CodeUtils } from '../../js/utils';
import { Link } from 'react-router-dom';

function ItemReservation(props) {

    return (
        <div className="item-container">
            <div className="item-details-wrapper">
                <h4>{props.LogementName}</h4>
                <p>Du {CodeUtils.toShortDate(props.DateDebut)} au {CodeUtils.toShortDate(props.DateFin)}</p>
                <Link to={"/logements/" + props.LogementID}>Voir le logement</Link>
            </div>
        </div>
    )
}

export default ItemReservation;