import whyUSImage from '../../../assets/why-us.jpg'

const Testimonial = () => {
    return (
        <div className="space-y-8 py-10">
            {/* title and sub title */}
            <div className="w-1/2 mx-auto text-center space-y-4">
                <h1 className="text-4xl font-semibold text-[#007E85]">Testimonial</h1>
                <p className="">Explore what our customers says about us and our service. We are also happy to serve them</p>
            </div>
            {/* services */}

            <div className='grid grid-cols-3 gap-8'>
                {/* card 1 */}
                <div className="card bg-base-100 shadow-xl text-start">
                    <div className="ps-6 pt-6">
                        <img src={whyUSImage} alt="Shoes" className="h-20 w-20 rounded-full" />
                    </div>
                    <div className="card-body">
                        <p className='font-semibold'><q>Amazing service, Never experienced before</q></p>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi assumenda earum dicta distinctio fugiat veritatis.</p>
                        <h2 className="mt-2"><span className='text-xl text-[#007E85]'>John Canopy</span> <br />CEO of Tomato</h2>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card bg-base-100 shadow-xl text-start">
                    <div className="ps-6 pt-6">
                        <img src={whyUSImage} alt="Shoes" className="h-20 w-20 rounded-full" />
                    </div>
                    <div className="card-body">
                        <p className='font-semibold'><q>Amazing service, Never experienced before</q></p>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi assumenda earum dicta distinctio fugiat veritatis.</p>
                        <h2 className="mt-2"><span className='text-xl text-[#007E85]'>John Canopy</span> <br />CEO of Tomato</h2>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card bg-base-100 shadow-xl text-start">
                    <div className="ps-6 pt-6">
                        <img src={whyUSImage} alt="Shoes" className="h-20 w-20 rounded-full" />
                    </div>
                    <div className="card-body">
                        <p className='font-semibold'><q>Amazing service, Never experienced before</q></p>
                        <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi assumenda earum dicta distinctio fugiat veritatis.</p>
                        <h2 className="mt-2"><span className='text-xl text-[#007E85]'>John Canopy</span> <br />CEO of Tomato</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;