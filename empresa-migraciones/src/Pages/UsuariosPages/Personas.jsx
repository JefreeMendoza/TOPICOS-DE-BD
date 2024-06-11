import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Personas = () => {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/personas')
            .then(response => {
                setPersonas(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the personas!', error);
            });
    }, []);

    return (
        <div>
            <h1>Personas</h1>
            <ul>
                {personas.map(persona => (
                    <li key={persona.id}>
                        {persona.cPerName} {persona.cPerLastname}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Personas;
