import NavBar from "../Components/NavBar";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

function Register() {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit(async (values) => {
        console.log(values);
        const res = await registerRequest(values);
        console.log(res);
    })

    return (
        <>
            <NavBar />
            <h1>
                ESTAS EN EL REGISTER
            </h1>

            <form
                onSubmit={onSubmit}
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