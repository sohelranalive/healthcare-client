import { Link, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import { Controller, useForm } from "react-hook-form"
import { useState } from "react";
import SecondaryLoader from "../../components/SecondaryLoader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const imageUploadAPIKey = import.meta.env.VITE_ImageUploadAPI;
const imageUploadingUrl = `https://api.imgbb.com/1/upload?key=${imageUploadAPIKey}`

const SignUp = () => {

    const notify = () => {
        toast('Registration successful, Please Login Now !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const navigate = useNavigate()

    const [authError, setAuthError] = useState('')

    const [showPassword, setShowPassword] = useState(false)
    const [agreement, setAgreement] = useState(true)
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, control, reset, formState: { errors }, } = useForm()

    const { userSignUp, userProfileUpdate, userLogOut } = useAuth()

    const onSubmit = (data) => {
        // console.log(data);

        setLoading(true)

        const formattedDate = data.date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });

        const formData = new FormData()
        formData.append('image', data.photo[0])

        let photoUrl = ''

        fetch(imageUploadingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(responseData => {
                photoUrl = responseData.data.display_url;
                continueExecution()
            })

        function continueExecution() {

            const userInfo = {
                userName: data.name,
                birthDate: formattedDate,
                userEmail: data.email,
                IdentityNo: data.idNumber,
                usePhone: data.phone,
                userPhoto: photoUrl,
                userRole: 'user'
            }

            userSignUp(data.email, data.password)
                .then(result => {
                    if (result.user) {
                        userProfileUpdate(data.name, photoUrl)
                            .then(() => {
                                console.log('profile updated');
                                fetch('http://localhost:5000/user', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(userInfo)
                                })
                                    .then(res => res.json())
                                    .then(resData => {
                                        if (resData.insertedId) {
                                            userLogOut()
                                                .then(() => {
                                                    setLoading(false)
                                                    reset()
                                                    setAuthError('')
                                                    notify()
                                                    navigate('/login')
                                                })
                                                .catch(error => {
                                                    console.log(error);
                                                })
                                        }
                                    })
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    }
                })
                .catch(error => {
                    console.log(error.code);
                    setLoading(false)
                    if (error.code == "auth/email-already-in-use") {
                        return setAuthError('Email is already in use. Please try with a unique email.')
                    }
                    setAuthError('Please try again later')
                })
        }
    }


    return (
        <div>
            {/* Page Banner */}
            <div className="others-page-banner flex items-center">
                <Container>
                    <div className="w-full flex flex-col items-center text-white">
                        <h1 className="text-4xl font-semibold mb-2">SignUp here to explore all the facilities</h1>
                        <p>You need to sign up for exploring all of our features and take appointments.</p>
                    </div>
                </Container>
            </div>
            {/* SignUp Contents */}
            <Container>
                <div className="py-20 flex items-center">
                    <div className="w-6/12 pr-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text">Your Full Name</span>
                                    </label>
                                    <input
                                        {...register("name", { required: true })}
                                        type="text"
                                        placeholder="Your Name"
                                        className="border outline-none py-2 px-2 rounded-md border-[#007E85]"
                                    />
                                    {errors.name && <span className="font-bold text-red-500">Name is required, please enter your full name</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date of Birth</span>
                                    </label>
                                    <Controller
                                        name="date"
                                        control={control}
                                        defaultValue={null}
                                        rules={{ required: true }}
                                        render={({ field }) => (
                                            <DatePicker
                                                selected={field.value}
                                                onChange={(date) => field.onChange(date)}
                                                className="border outline-none py-2 px-2 rounded-md border-[#007E85] w-full"
                                            />
                                        )}
                                    />
                                    {errors.date && <span className="text-red-500 font-bold">Date is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Identity Number(Optional)</span>
                                    </label>
                                    <input
                                        {...register("idNumber")}
                                        type="text"
                                        placeholder="235 625 4544"
                                        className="border outline-none py-2 px-2 rounded-md border-[#007E85]"
                                    />
                                </div>

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

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone Number(Optional)</span>
                                    </label>
                                    <input
                                        {...register("phone")}
                                        type="text"
                                        placeholder="Phone Number"
                                        className="border outline-none py-2 px-2 rounded-md border-[#007E85]"
                                    />
                                </div>

                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text">Upload Profile Image</span>
                                    </label>
                                    <input
                                        {...register("photo", { required: true })}
                                        type="file"
                                        className="border outline-none py-2 px-2 rounded-md border-[#007E85] bg-white"
                                    />
                                    {errors.photo && <span className="text-red-500 font-bold">Photo is required for ID</span>}
                                </div>

                                <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                        })}
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
                                    {errors.password && errors.password.type === "required" && (
                                        <span className="text-red-500 font-bold">Password field is required</span>
                                    )}
                                    {errors.password && errors.password.type === "minLength" && (
                                        <span className="text-red-500 font-bold">Password must be at least 6 characters long</span>
                                    )}
                                    {errors.password && errors.password.type === "maxLength" && (
                                        <span className="text-red-500 font-bold">Password cannot exceed 20 characters</span>
                                    )}
                                    {errors.password && errors.password.type === "pattern" && (
                                        <span className="text-red-500 font-bold">Password must include a capital letter and a special character</span>
                                    )}
                                </div>
                            </div>

                            <div className="form-control mt-4">
                                <div className="flex">
                                    <input
                                        {...register("agreement", { required: true })}
                                        type="checkbox"
                                        onClick={() => setAgreement(!agreement)}
                                        checked={agreement}
                                        className="checkbox checkbox-accent"
                                    />
                                    <span className="ms-4">I accept all the <span className="text-blue-500 underline"><Link>terms and conditions.</Link></span></span>
                                </div>
                                {errors.agreement && <span className="mt-2 font-bold text-red-500">Need to accept our terms and conditions</span>}
                            </div>

                            <div className="form-control mt-6 w-4/12 mx-auto">
                                <input
                                    type="submit"
                                    value='Sign Up'
                                    className="bg-[#007E85] px-6 py-3 rounded-md font-semibold text-white cursor-pointer"
                                />
                            </div>
                        </form>
                        <p className="text-red-500 font-bold">{authError}</p>
                        <br />
                        <p>Already have an account? <span className="underline text-sky-500"><Link to='/login'>Please Login</Link></span></p>
                    </div>
                    <div className="divider lg:divider-horizontal">OR</div>
                    <div className="w-6/12 pl-4">
                        <h1 className="text-3xl text-center">Choose a social Login</h1>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </Container>
            {loading && <SecondaryLoader></SecondaryLoader>}
        </div>
    );
};

export default SignUp;