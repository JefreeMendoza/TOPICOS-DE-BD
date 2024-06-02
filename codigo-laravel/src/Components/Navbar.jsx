import React from 'react'
import { Link , useLocation } from 'react-router-dom'
import '../style/style-NavBar.css'

function Navbar() {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path ? 'navbar-link active' : 'navbar-link';
    };

    return (  
        <>
            <div>
                <nav className="navbar">
                    {/* <h2 className="navbar-title">Videoclub</h2> */}
                    <ul className="navbar-links">
                        <li><Link to="/" className={getLinkClass('/')}>Home</Link></li>
                        <li><Link to="/nosotros" className={getLinkClass('/nosotros')}>Nosotros</Link></li>
                        <li><Link to="/servicios" className={getLinkClass('/servicios')}>Servicios</Link></li>
                        <li><Link to="/contactos" className={getLinkClass('/contactos')}>Contactos</Link></li>
                        <li><Link to="/login" className={getLinkClass('/login')}>Login</Link></li>
                    </ul>
                </nav>
                {/* <div className="dashboard-content">
                    <p> Aqui va el contedio ... </p>
                    Aquí puedes agregar más contenido del dashboard
                </div> */}
            </div>
        </>
    );
}

export default Navbar;