import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const SocialLogin = () => {
    return (
        <div className="w-full space-y-4 mt-4">
            <button className="w-full border-2 border-[#007E85] py-1 rounded-md flex items-center justify-center hover:bg-[#007E85] hover:text-white">
                <FcGoogle className='text-3xl' />
                <span className='text-2xl ms-2'>Login with Google</span>
            </button>
            <button className="w-full border-2 border-[#007E85] py-1 rounded-md flex items-center justify-center hover:bg-[#007E85] hover:text-white">
                <BsGithub className='text-3xl' />
                <span className='text-2xl ms-2'>Login with Github</span>
            </button>
        </div>
    );
};

export default SocialLogin;