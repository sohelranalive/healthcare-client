import { Link } from "react-router-dom";

const ContactForm = () => {
    return (
        <form>
            <div className="grid grid-cols-2 gap-6">
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
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Choose a topic</span>
                    </label>
                    <input type="text" placeholder="Department" className="border outline-none py-2 px-2 rounded-md border-[#007E85]" />
                </div>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea type="text" placeholder="Time" className="border outline-none py-2 px-2 rounded-md border-[#007E85]" rows={4} />
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
    );
};

export default ContactForm;