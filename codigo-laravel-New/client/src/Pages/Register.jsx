import NavBar from "../Components/NavBar";
import { useForm } from "react-hook-form";

function Register() {

    const { register, handleSubmit } = useForm();

    return (
        <>
            <NavBar />
            <h1>
                ESTAS EN EL REGISTER
            </h1>

            <form
                onSubmit={handleSubmit((values) => {
                    console.log(values);
                })}
            >
                <label htmlFor="">
                    Ingrese su User Name
                </label>
                <input
                    type="text"
                    {...register("username", { required: true })}
                    placeholder="User Name"
                />

                <label htmlFor="">
                    Ingrese su Password
                </label>
                <input
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
                />

                <label htmlFor="">
                    Ingrese su Email
                </label>
                <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                />

                <button type="submit">
                    Register
                </button>

            </form >
        </>
    );
}

export default Register;