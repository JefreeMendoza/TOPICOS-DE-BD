import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Contactos from '../Pages/Contactos'
import Nosotros from '../Pages/Nosotros'
import Servicios from '../Pages/Servicios'
import Login from '../Pages/Login'

function AppRouter () {
    return (  
        <BrowserRouter>
            <Routes>
                <Route
                    exact path='/'
                    element= {<Home/>}
                />

                <Route
                    path='/contactos'
                    element= {<Contactos/>}
                />

                <Route
                    path='/nosotros'
                    element= {<Nosotros/>}
                />

                <Route
                    path='/servicios'
                    element= {<Servicios/>}
                />
                
                <Route
                    path='/login'
                    element= {<Login/>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;