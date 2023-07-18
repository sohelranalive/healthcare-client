import whyUSImage from '../../../assets/why-us.jpg'
import { BsArrowRight } from 'react-icons/bs';

const OurServices = () => {
    return (
        <div className="space-y-8 py-10">
            {/* title and sub title */}
            <div className="w-1/2 mx-auto text-center space-y-4">
                <h1 className="text-4xl font-semibold text-[#007E85]">Services we provide</h1>
                <p className="">We provide different services. Our specialized doctors are always ready to serve you. You will be satisfied for sure.</p>
            </div>
            {/* services */}

            <div className='grid grid-cols-3 gap-8'>
                {/* card 1 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src={whyUSImage} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Dental Treatment</h2>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi assumenda earum dicta distinctio fugiat veritatis.</p>
                        <div className="card-actions">
                            <button className=" ">
                                <div className='flex items-center font-semibold text-[#007E85]'>
                                    <p>Learn More</p>
                                    <p><BsArrowRight /></p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src={whyUSImage} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Surgery Treatment</h2>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi assumenda earum dicta distinctio fugiat veritatis.</p>
                        <div className="card-actions">
                            <button className=" ">
                                <div className='flex items-center font-semibold text-[#007E85]'>
                                    <p>Learn More</p>
                                    <p><BsArrowRight /></p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src={whyUSImage} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Physician Treatment</h2>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi assumenda earum dicta distinctio fugiat veritatis.</p>
                        <div className="card-actions">
                            <button className=" ">
                                <div className='flex items-center font-semibold text-[#007E85]'>
                                    <p>Learn More</p>
                                    <p><BsArrowRight /></p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurServices;