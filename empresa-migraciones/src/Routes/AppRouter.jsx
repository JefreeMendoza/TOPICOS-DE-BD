import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Programas from   '../Pages/Programas'
import Talleres from '../Pages/Talleres'
import Asesoramiento from  '../Pages/Asesoramiento'
import Contacto from '../Pages/Contacto'
import Danza from '../Pages/TalleresPages/Danza'
import Baile from   '../Pages/TalleresPages/Baile'
import Oratoria from '../Pages/TalleresPages/Oratoria'
import Liderazgo from  '../Pages/TalleresPages/Liderazgo'
import Personas from '../Pages/UsuariosPages/Personas';

function AppRouter() {
    return (  
        <BrowserRouter>
            <Routes>
                <Route
                    exact path='/'
                    element= {<Home/>}
                />

                <Route
                    path='/programas'
                    element= {<Programas/>}
                />

                <Route
                    path='/talleres'
                    element= {<Talleres/>}
                />


                <Route
                    exact path='/talleres/danza'
                    element= {<Danza/>}
                />

                <Route
                    path='/talleres/baile'
                    element= {<Baile/>}
                />

                <Route
                    path='/talleres/oratoria'
                    element= {<Oratoria/>}
                />

                <Route
                    path='/talleres/liderazgo'
                    element= {<Liderazgo/>}
                />




                <Route
                    path='/asesoramiento'
                    element= {<Asesoramiento/>}
                />

                <Route
                    path='/contacto'
                    element= {<Contacto/>}
                />


                <Route
                    path='/personas'
                    element= {<Personas/>}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
