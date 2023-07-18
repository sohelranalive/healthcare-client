import Container from "../../../components/Container";
import FindADoctor from "../../Shared/FindADoctor/FindADoctor";
import NewsLetter from "../../Shared/NewsLetter/NewsLetter";
import Faq from "../Faq/Faq";
import Services from "../Services/Services";

const Service = () => {
    return (
        <div>
            {/* Page Banner */}
            <div className="page-banner flex items-center">
                <Container>
                    <div className="w-full flex items-center">
                        {/* Text and heading */}
                        <div className="w-1/2 text-white">
                            <h1 className="text-4xl font-semibold mb-2">Meet the Best Hospital</h1>
                            <p>We know how large objects will act, but things on a small scale.</p>
                            <div className="space-x-6 mt-6">
                                <button className="bg-[#007E85] rounded-button">Get Quote Now</button>
                                <button className="bg-transparent border border-[#007E85] rounded-button">Learn More</button>
                            </div>
                        </div>
                        {/* Appointment form */}
                        <div className="w-1/2 rounded-lg bg-white">
                            <div className="p-8">
                                <h1 className="text-3xl font-bold text-center mb-6">Book Appointment</h1>
                                <form>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Name</span>
                                            </label>
                                            <input type="text" placeholder="Name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Email</span>
                                            </label>
                                            <input type="text" placeholder="email" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Department</span>
                                            </label>
                                            <input type="text" placeholder="Department" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Time</span>
                                            </label>
                                            <input type="text" placeholder="Time" className="input input-bordered" />
                                        </div>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="primary-button">Book Appointment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            {/* Service Page Contents */}
            <Container>
                {/* Find a doctor section */}
                <div className="pt-20 pb-10">
                    <FindADoctor></FindADoctor>
                </div>
                {/* All Services */}
                <Services></Services>
                {/* FAQ Section */}
                <Faq></Faq>
                {/* Newsletter */}
                <div className="pt-10 pb-20">
                    <NewsLetter></NewsLetter>
                </div>
            </Container>
        </div>
    );
};

export default Service;