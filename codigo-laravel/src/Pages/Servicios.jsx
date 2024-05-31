import Navbar from "../Components/Navbar"
import { Link } from "react-router-dom";

function Servicios() {
    const services = [1,2,3,4,5,6];
    return (  
        <>
            <Navbar/>
            <h2> Estas en el Servicios Page </h2>

            <ul>
                {services.map((service) =>(
                    <li key={service}>
                        <Link
                            to= {'/src/services/${service}'}
                        >
                            Servicio {service}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Servicios;