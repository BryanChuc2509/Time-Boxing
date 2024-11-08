import { useForm, SubmitHandler } from "react-hook-form";
import IUser from "../interfaces/IUser";

// type Inputs = {
//     example: string,
//     exampleRequired: string,
// };

function Login() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<IUser>();
    const onSubmit: SubmitHandler<IUser> = data => console.log(data);

    // console.log(watch("example")) // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="test" {...register("email", { required: true })} />
            <input {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}
            <input type="submit" />
        </form>
    );
}

export default Login;