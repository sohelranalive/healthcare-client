import bannerImage from '../../../assets/banner-img.png'
import { BsPlayCircleFill } from 'react-icons/bs';


const Banner = () => {
    return (
        <div className="flex">
            <div className="w-1/2 flex flex-col justify-center space-y-14">
                <div>
                    <h1 className="text-4xl">Providing Quality <span className="text-[#007E85]">Healthcare</span> For A <span className="text-[#6EAB36]">Brighter</span> And <span className="text-[#6EAB36]">Healthy</span> Future</h1>
                    <br />
                    <p className="text-justify">At our hospital, we are dedicated to providing exceptional medical care to our patients and their families. Our experienced team of medical professionals, cutting-edge technology, and compassionate approach make us a leader in the healthcare industry</p>
                </div>
                <div className='space-x-4 flex items-center'>
                    <button className='primary-button'>Appointments</button>
                    <button className='px-6 py-2 rounded-md font-semibold'>
                        <div className='flex items-center space-x-4'>
                            <span><BsPlayCircleFill className='text-4xl text-[#007E85]' /></span>
                            <span>Watch Video</span>
                        </div>
                    </button>
                </div>
            </div>
            {/* <div className="w-1/2 border-2 border-red-500">
                <div className='w-3/4  mx-auto relative'>
                    <img src={bannerImage} alt="" className='h-full w-full p-10' />
                    <div className='banner-bg absolute bottom-10'></div>
                </div>
            </div> */}
            <div className="w-1/2">
                <div className='w-3/4 mx-auto relative'>
                    <div className='banner-bg absolute bottom-10 left-0 right-0 mx-auto z-0'></div>
                    <div className='absolute top-36 right-0 z-20 bg-white px-2 py-2 rounded-md'>
                        <p className='text-2xl font-bold'><span className='text-[#007E85]'>24/7</span> Service</p>
                    </div>
                    <img src={bannerImage} alt="" className='h-full w-full p-10 relative z-10' />
                </div>
            </div>

        </div>
    );
};

export default Banner;