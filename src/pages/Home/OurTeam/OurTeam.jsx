import { Link } from 'react-router-dom';
import whyUSImage from '../../../assets/why-us.jpg'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const OurTeam = () => {
    return (
        <div className="space-y-8 py-10">
            {/* title and sub title */}
            <div className="w-1/2 mx-auto text-center space-y-4">
                <h1 className="text-4xl font-semibold text-[#007E85]">Meet our team members</h1>
                <p className="">Meet our specialized team members from all over the country. Every team members has excelled in his academic and professional life.</p>
            </div>
            {/* services */}

            <div className='grid grid-cols-3 gap-8'>
                {/* card 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src={whyUSImage} alt="Shoes" className="h-40 w-40 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#007E85]">John Canopy</h2>
                        <p>CEO & Co-Founder</p>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi assumenda earum dicta distinctio fugiat veritatis.</p>
                        <div className="card-actions mt-2 flex">
                            <div className='h-8 w-8 bg-slate-200 rounded-md p-1'>
                                <Link><FaFacebookF className='h-full w-full text-blue-400' /></Link>
                            </div>
                            <div className='h-8 w-8 bg-slate-200 rounded-md p-1'>
                                <Link><FaTwitter className='h-full w-full text-blue-600' /></Link>
                            </div>
                            <div className='h-8 w-8 bg-slate-200 rounded-md p-1'>
                                <Link><FaInstagram className='h-full w-full text-orange-500' /></Link>
                            </div>
                            <div className='h-8 w-8 bg-slate-200 rounded-md p-1'>
                                <Link><FaLinkedinIn className='h-full w-full text-blue-600' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src={whyUSImage} alt="Shoes" className="h-40 w-40 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#007E85]">Morphy Atlantic</h2>
                        <p>Member of Committee</p>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi assumenda earum dicta distinctio fugiat veritatis.</p>
                        <div className="card-actions mt-2 flex">
                            <div className='h-8 w-8 bg-slate-200 rounded-md p-1'>
                                <Link><FaFacebookF className='h-full w-full text-blue-400' /></Link>
                            </div>
                            <div className='h-8 w-8 bg-slate-200 rounded-md p-1'>
                                <Link><FaTwitter className='h-full w-full text-blue-600' /></Link>
                            </div>
                            <div className='h-8 w-8 bg-slate-200 rounded-md p-1'>
                                <Link><FaInstagram className='h-full w-full text-orange-500' /></Link>
                            </div>
                            <div className='h-8 w-8 bg-slate-200 rounded-md p-1'>
                                <Link><FaLinkedinIn className='h-full w-full text-blue-600' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src={whyUSImage} alt="Shoes" className="h-40 w-40 rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-[#007E85]">Duke Chan</h2>
                        <p>House Surgeon</p>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi assumenda earum dicta distinctio fugiat veritatis.</p>
                        <div className="card-actions mt-2 flex">
                            <div className='h-8 w-8 bg-slate-200 rounded-md p-1'>
                                <Link><FaFacebookF className='h-full w-full text-blue-400' /></Link>
                            </div>
                            <div className='h-8 w-8 bg-slate-200 rounded-md p-1'>
                                <Link><FaTwitter className='h-full w-full text-blue-600' /></Link>
                            </div>
                            <div className='h-8 w-8 bg-slate-200 rounded-md p-1'>
                                <Link><FaInstagram className='h-full w-full text-orange-500' /></Link>
                            </div>
                            <div className='h-8 w-8 bg-slate-200 rounded-md p-1'>
                                <Link><FaLinkedinIn className='h-full w-full text-blue-600' /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurTeam;