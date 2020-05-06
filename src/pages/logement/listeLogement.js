import React, { useState, useEffect } from 'react'
import { DbUtils } from "../../js/utils";
import ItemLogement from './itemLogement';

function ListeLogement(){
    
    const[listeLogement, setListeLogement] = useState([])
    useEffect(()=>{
        DbUtils.getDocuments("Logement").then(list =>{
            setListeLogement(list)
        });
    },[])
    return (
        <div>
            {listeLogement.map(l => (
                <ItemLogement>

                </ItemLogement>
            ))}
        </div>
    );
}

export default ListeLogement