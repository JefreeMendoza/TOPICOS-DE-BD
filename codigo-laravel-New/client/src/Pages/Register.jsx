import NavBar from "../Components/NavBar";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/Auth.Context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/Register.css";



function Register() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <>
            <NavBar />
            <h1>
                ESTAS EN EL REGISTER
            </h1>

            <div className="error-container">
                {RegisterErrors.map((error, i) => (
                    <div kei={i} className="form-error">
                        {error}
                    </div>
                ))}
            </div>

            <form
                className="form-container"
                onSubmit={onSubmit}
            >
                <label htmlFor="" className="form-label">
                    Ingrese su User Name
                </label>
                <input
                    className="form-input"
                    type="text"
                    {...register("username", { required: true })}
                    placeholder="User Name"
                />
                {errors.username && <p className="form-error"> User name is required </p>}

                <label htmlFor="" className="form-label">
                    Ingrese su Password
                </label>
                <input
                    className="form-input"
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                />
                {errors.email && <p className="form-error"> Email is required </p>}

                <label htmlFor="" className="form-label">
                    Ingrese su Email
                </label>
                <input
                    className="form-input"
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                />
                {errors.password && <p className="form-error"> Password is required </p>}

                <button
                    className="form-button"
                    type="submit"
                >
                    Register
                </button>

            </form >
        </>
    );
}

export default Register;