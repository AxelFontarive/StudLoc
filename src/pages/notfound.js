import React from 'react';
import { useHistory, Link } from 'react-router-dom';

function NotFound() {
    return (
        <div>
            <h1>404 !</h1>
            <p>La page que vous recherchez n'existe pas ou a été supprimée.</p>
            <Link to="/">Retour au menu principal</Link>
        </div>
    )
}

export default NotFound