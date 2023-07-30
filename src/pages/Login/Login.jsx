import Container from "../../components/Container";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const { userSignIn } = useAuth()
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const onSubmit = (data) => {
        userSignIn(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigate('/')

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            {/* Page Banner */}
            <div className="others-page-banner flex items-center">
                <Container>
                    <div className="w-full flex flex-col items-center text-white">
                        <h1 className="text-4xl font-semibold mb-2">Login here to explore all the facilities</h1>
                        <p>You need to login for exploring all of our features and take appointments.</p>
                    </div>
                </Container>
            </div>
            {/* login Contents */}
            <Container>
                <div className="py-20 px-60">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="Email Address"
                                    className="border outline-none py-2 px-2 rounded-md border-[#007E85]"
                                />
                                {errors.email && <span className="text-red-500 font-bold">Email is required</span>}
                            </div>

                            <div className="form-control col-span-2">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    {...register("password", { required: true })}
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    className="border outline-none py-2 px-2 rounded-md border-[#007E85]"
                                />
                                <div className="flex justify-end -translate-y-7 px-4">
                                    <span
                                        className="cursor-pointer "
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                                    </span>
                                </div>
                                {errors.password && <span className="text-red-500 font-bold">Password field is required</span>}
                            </div>

                            <div className="form-control mt-6 w-4/12 mx-auto">
                                <input
                                    type="submit"
                                    value='Login'
                                    className="bg-[#007E85] px-6 py-3 rounded-md font-semibold text-white cursor-pointer"
                                />
                            </div>
                        </form>
                        <br />
                        <p>New to healthcare? <span className="underline text-sky-500"><Link to='/signup'>Please Register</Link></span></p>
                    </div>
                    <div className="divider lg:divider-vertical">OR</div>
                    <div className="">
                        <h1 className="text-3xl text-center">Choose a social Login</h1>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;