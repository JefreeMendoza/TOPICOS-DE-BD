import React from 'react';
import {Link, useLocation } from 'react-router-dom'
import '../Styles/Talleres.css'

function Talleres() {

    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path ? 'talleres-link active' : 'talleres-link';
    };


    return (  
        <>
            <div>
            <h2>
                Talleres: 
            </h2>
                <ul className="talleres-list">
                    <li><Link to="/talleres/danza" className={getLinkClass('/talleres/danza')}>Danza</Link></li>
                    <li><Link to="/talleres/baile" className={getLinkClass('/talleres/baile')}>Baile</Link></li>
                    <li><Link to="/talleres/oratoria" className={getLinkClass('/talleres/oratoria')}>Oratoria</Link></li>
                    <li><Link to="/talleres/liderazgo" className={getLinkClass('/talleres/liderazgo')}>Liderazgo</Link></li>
                </ul>
            </div>

        </>
    );
}

export default Talleres;