import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Programas from   '../Pages/Programas'
import Talleres from '../Pages/Talleres'
import Asesoramiento from  '../Pages/Asesoramiento'
import Contacto from '../Pages/Contacto'

function AppRouter() {
    return (  
        <>
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
                    path='/asesoramiento'
                    element= {<Asesoramiento/>}
                />

                <Route
                    path='/contacto'
                    element= {<Contacto/>}
                />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default AppRouter;
