import { FaGreaterThan } from 'react-icons/fa';

const Faq = () => {
    return (
        <div className="py-10">
            {/* Tittle and subtitle */}
            <div className="w-1/2 mx-auto text-center space-y-4">
                <h1 className="text-4xl font-semibold">FAQ</h1>
                <p className="">We provide different services. Our specialized doctors are always ready to serve you. You will be satisfied for sure.</p>
            </div>
            {/* Contents */}
            <div className='grid grid-cols-3 gap-8 mt-8'>
                <div className="flex bg-white shadow-lg rounded-lg p-2">
                    <div className="w-1/12 mt-1">
                        <FaGreaterThan className='text-[#007E85]' />
                    </div>
                    <div className="w-10/12">
                        <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, pariatur.</p>
                    </div>
                </div>
                <div className="flex bg-white shadow-lg rounded-lg p-2">
                    <div className="w-1/12 mt-1">
                        <FaGreaterThan className='text-[#007E85]' />
                    </div>
                    <div className="w-10/12">
                        <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, pariatur.</p>
                    </div>
                </div>
                <div className="flex bg-white shadow-lg rounded-lg p-2">
                    <div className="w-1/12 mt-1">
                        <FaGreaterThan className='text-[#007E85]' />
                    </div>
                    <div className="w-10/12">
                        <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, pariatur.</p>
                    </div>
                </div>
                <div className="flex bg-white shadow-lg rounded-lg p-2">
                    <div className="w-1/12 mt-1">
                        <FaGreaterThan className='text-[#007E85]' />
                    </div>
                    <div className="w-10/12">
                        <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, pariatur.</p>
                    </div>
                </div>
                <div className="flex bg-white shadow-lg rounded-lg p-2">
                    <div className="w-1/12 mt-1">
                        <FaGreaterThan className='text-[#007E85]' />
                    </div>
                    <div className="w-10/12">
                        <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, pariatur.</p>
                    </div>
                </div>
                <div className="flex bg-white shadow-lg rounded-lg p-2">
                    <div className="w-1/12 mt-1">
                        <FaGreaterThan className='text-[#007E85]' />
                    </div>
                    <div className="w-10/12">
                        <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, pariatur.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;