import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <div className='404'>
            <h2>Oooops........</h2>
            <p>la page est introuvable</p>
            <Link to ='/'> Retouner a la page d'acceuil</Link>
        </div>
    );
};

export default Notfound;