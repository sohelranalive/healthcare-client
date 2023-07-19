import { Link } from "react-router-dom";
import loginImage from "../../assets/undraw_Login_re_4vu2.png"
import Container from "../../components/Container";

const Login = () => {
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
                        <form>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First Name</span>
                                    </label>
                                    <input type="text" placeholder="First Name" className="border outline-none py-2 px-2 rounded-md border-[#007E85]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="First Name" className="border outline-none py-2 px-2 rounded-md border-[#007E85]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="border outline-none py-2 px-2 rounded-md border-[#007E85]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="text" placeholder="Phone" className="border outline-none py-2 px-2 rounded-md border-[#007E85]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Date of Birth</span>
                                    </label>
                                    <input type="text" placeholder="email" className="border outline-none py-2 px-2 rounded-md border-[#007E85]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">National Identity Number</span>
                                    </label>
                                    <input type="text" placeholder="Phone" className="border outline-none py-2 px-2 rounded-md border-[#007E85]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="Department" className="border outline-none py-2 px-2 rounded-md border-[#007E85]" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="text" placeholder="Department" className="border outline-none py-2 px-2 rounded-md border-[#007E85]" />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <div className="flex">
                                    <input type="checkbox" className="checkbox checkbox-accent" />
                                    <span className="ms-4">I accept all the <span className="text-blue-500 underline"><Link>terms and conditions.</Link></span></span>
                                </div>
                            </div>
                            <div className="form-control mt-6 w-4/12 mx-auto">
                                <button className="bg-[#007E85] px-6 py-3 rounded-md font-semibold text-white">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="w-5/12 p-4 rounded-md">
                        <img src={loginImage} alt="" className="h-full w-full" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Login;