import React from 'react'
import { Link , useLocation } from 'react-router-dom'
import '../Styles/NavBar.css'


function NavBar() {

    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path ? 'navbar-link active' : 'navbar-link';
    };

    return (  
        <>
            <div>
                <nav className='navbar'>
                    {/* <h1>
                        Hola mundo
                    </h1> */}
                    <ul className="navbar-links">
                        <li><Link to="/" className={getLinkClass('/')}>Inicio</Link></li>
                        <li><Link to="/programas" className={getLinkClass('/programas')}>Programas</Link></li>
                        <li><Link to="/talleres" className={getLinkClass('/talleres')}>Talleres</Link></li>
                        <li><Link to="/asesoramiento" className={getLinkClass('/asesoramiento')}>Asesoramiento</Link></li>
                        <li><Link to="/contacto" className={getLinkClass('/contacto')}>Contacto</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default NavBar;

