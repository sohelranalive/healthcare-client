import { Link } from "react-router-dom";
import Container from "../../components/Container";
import singUpImage from "../../assets/undraw_Sign_up_n6im.png"
import { Controller, useForm } from "react-hook-form"
import { useState } from "react";
import SecondaryLoader from "../../components/SecondaryLoader";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SignUp = () => {

    const [agreement, setAgreement] = useState(true)
    const [loading, setLoading] = useState(false)
    // const [startDate, setStartDate] = useState(new Date());

    const { register, handleSubmit, control, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data);
        const formattedDate = data.date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
        console.log(formattedDate);
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
                <div className="py-20 flex">
                    <div className="w-7/12 p-4">
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
                                    {/* <DatePicker
                                        {...register("date")}
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        className="border outline-none py-2 px-2 rounded-md border-[#007E85] w-full"
                                    /> */}
                                    {/* {errors.date && <span className="text-red-500 font-bold">Date is required</span>} */}
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
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                        })}
                                        type="password"
                                        placeholder="Department"
                                        className="border outline-none py-2 px-2 rounded-md border-[#007E85]"
                                    />
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

                            <div className="form-control mt-6">
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
                                {errors.agreement && <span className="font-bold text-red-500">Need to accept our terms and conditions</span>}
                            </div>

                            <div className="form-control mt-6 w-4/12 mx-auto">
                                <input
                                    type="submit"
                                    value='Sign Up'
                                    className="bg-[#007E85] px-6 py-3 rounded-md font-semibold text-white"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="w-5/12 p-4 rounded-md">
                        <img src={singUpImage} alt="" className="h-full w-full" />
                    </div>
                </div>
            </Container>
            {loading && <SecondaryLoader></SecondaryLoader>}
        </div>
    );
};

export default SignUp;