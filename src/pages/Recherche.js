import React, { useState } from 'react'
import '../css/rechercher.css';
import ItemLogement from './logement/itemLogement';
import { db } from '../js/database';
function Recherche(){
    const [filters, setFilters] = useState({
        codePostal : "",
        ville : "",
        piecesMin : 1,
        piecesMax : 10,
        surfaceMin : 10,
        surfaceMax : 200,
        prixMin : 10,
        prixMax : 1000
    });

    const [results, setResults] = useState([]);

    function fieldChangedEventHandler(e) {
        const elName = e.target.name;
        const value = e.target.value;

        setFilters({
            ...filters,
            [elName] : value
        })
    }

    function submitEventHandler(e) {
        e.preventDefault()
        
        let request = db.collection("Logement");

        if(filters.codePostal) {
            request = request.where("CodePostal", "==", filters.codePostal);
        }
        if(filters.ville) {
            request = request.where("Ville", "==", filters.ville);
        }

        request.get().then(snapshot => {
            const docs = snapshot.docs.map(d => d.data());
            const filtered = docs.filter(d => 
                d.NbPiece >= (filters.piecesMin || 0) && 
                d.NbPiece <= (filters.piecesMax || 1000) &&
                d.Surface >= (filters.surfaceMin || 0) &&
                d.Surface <= (filters.surfaceMax || 20000) &&
                d.PrixSemaine >= (filters.prixMin || 0) &&
                d.PrixSemaine <= (filters.prixMax || 20000)
            );
            setResults(filtered)
        })
    }

    return(
        <>
            <div id="search-container">
                <form onSubmit={submitEventHandler}>
                    <div>
                        <label>Code Postal : </label>
                        <input type="text" name="codePostal" onChange={fieldChangedEventHandler} placeholder="01234"/>
                    </div>
                    <div>
                        <label>Ville : </label>
                        <input type="text" name="ville" onChange={fieldChangedEventHandler} placeholder="Paris"/>
                    </div>
                    <div>
                        <label>Pièces : </label>
                        <input type="number" name="piecesMin" onChange={fieldChangedEventHandler} defaultValue="1"/>
                        <label>à</label>
                        <input type="number" name="piecesMax" onChange={fieldChangedEventHandler} defaultValue="10"/>
                    </div>
                    <div>
                        <label>Surface : </label>
                        <input type="number" name="surfaceMin" onChange={fieldChangedEventHandler} defaultValue="10"/>
                        <label>à</label>
                        <input type="number" name="surfaceMax" onChange={fieldChangedEventHandler} defaultValue="200"/>
                        <label>m²</label>
                    </div>
                    <div>
                        <label>Prix : </label>
                        <input type="number" name="prixMin" onChange={fieldChangedEventHandler} defaultValue="10"/>
                        <label>à</label>
                        <input type="number" name="prixMax" onChange={fieldChangedEventHandler} defaultValue="1000"/>
                        <label>€</label>
                    </div>

                    <input type="submit" value="Rechercher"/>
                </form>
            </div>
            <div id="search-results">
                {results.length === 0 ? (
                    <>
                        <h2>Aucun résultat à afficher.</h2>
                        <h4>Changez vos critères de recherche pour continuer.</h4>
                    </>
                ) : (
                    <>
                        {results.map(r => (
                            <ItemLogement key={r.ID} {...r}/>
                        ))}
                    </>
                )}
            </div>
        </>
    )
}


export default Recherche