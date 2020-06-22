import React, { useState, useEffect } from 'react';
import { DbUtils } from '../../js/utils';
import ItemReservation from './itemReservation';

function ListeReservation(props) {

    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        if (props.user.ID) {
            DbUtils.getDocumentsWhere("Reservation", "UserID", "==", props.user.ID).then(list => {
                setReservations(list);
            });
        }
    }, []);

    return (
        <div>
            {reservations.map(item => (
                <ItemReservation key={item.ID} {...item}/>
            ))}
        </div>
    )
}

export default ListeReservation;
