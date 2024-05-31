import React from 'react'
import { Link } from 'react-router-dom'
import '../style/style-NavBar.css'

function Navbar() {
    return (  
        <>
            <div>
                <nav className="navbar">
                    {/* <h2 className="navbar-title">Videoclub</h2> */}
                    <ul className="navbar-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/contactos">Contactos</Link></li>
                        <li><Link to="/login">Login</Link></li>
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