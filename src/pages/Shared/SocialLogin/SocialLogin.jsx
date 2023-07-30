import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import useAuth from '../../../hooks/useAuth';
import { useState } from 'react';
import SecondaryLoader from '../../../components/SecondaryLoader';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SocialLogin = () => {

    const notify = () => {
        toast('Login Successful!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const [authError, setAuthError] = useState('')

    const { userGoogleSignIn, userGithubSignIn } = useAuth()

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleGoogleLogIn = () => {
        setLoading(true)
        userGoogleSignIn()
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
                    fetch(`http://localhost:5000/user?email=${loggedUser.email}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            console.log(data.isExisted);
                            if (!data.isExisted) {

                                const userInfo = {
                                    userName: loggedUser.displayName,
                                    birthDate: null,
                                    userEmail: loggedUser.email,
                                    IdentityNo: null,
                                    usePhone: null,
                                    userPhoto: loggedUser.photoURL,
                                    userRole: 'user'
                                }

                                fetch('http://localhost:5000/user', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(userInfo)
                                })
                                    .then(res => res.json())
                                    .then(resData => {
                                        if (resData.insertedId) {
                                            setLoading(false)
                                            navigate('/')
                                            notify()
                                        }
                                    })
                            }
                            else {
                                setLoading(false)
                                navigate('/')
                                notify()
                            }
                        })
                }
            })
            .catch(error => {
                console.log(error.code);
                setLoading(false)
                if (error.code == "auth/email-already-in-use") {
                    return setAuthError('Email is already in use. Please try with a unique email.')
                }
                setAuthError('Please try again later')
            })
    }

    const handleGithubLogIn = () => {
        userGithubSignIn()
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
                    fetch(`http://localhost:5000/user?email=${loggedUser.email}`)
                        .then(res => res.json())
                        .then(data => {
                            if (!data.isExisted) {

                                const userInfo = {
                                    userName: loggedUser.displayName,
                                    birthDate: null,
                                    userEmail: loggedUser.email,
                                    IdentityNo: null,
                                    usePhone: null,
                                    userPhoto: loggedUser.photoURL,
                                    userRole: 'user'
                                }

                                fetch('http://localhost:5000/user', {
                                    method: 'POST',
                                    headers: {
                                        'content-type': 'application/json'
                                    },
                                    body: JSON.stringify(userInfo)
                                })
                                    .then(res => res.json())
                                    .then(resData => {
                                        if (resData.insertedId) {
                                            setLoading(false)
                                            navigate('/')
                                            notify()
                                        }
                                    })
                            }
                            else {
                                setLoading(false)
                                navigate('/')
                                notify()
                            }
                        })
                }
            })
            .then(error => {
                console.log("Github error 135", error);
                setLoading(false)
                if (error.message == 'auth/email-already-in-use') {
                    return setAuthError('Email is already in use. Please try with a unique email.')
                }
                setAuthError('Please try again later')
            })
    }

    return (
        <div className="w-full space-y-4 mt-4">
            <button onClick={handleGoogleLogIn} className="w-full border-2 border-[#007E85] py-1 rounded-md flex items-center justify-center hover:bg-[#007E85] hover:text-white">
                <FcGoogle className='text-3xl' />
                <span className='text-2xl ms-2'>Login with Google</span>
            </button>
            <button onClick={handleGithubLogIn} className="w-full border-2 border-[#007E85] py-1 rounded-md flex items-center justify-center hover:bg-[#007E85] hover:text-white">
                <BsGithub className='text-3xl' />
                <span className='text-2xl ms-2'>Login with Github</span>
            </button>
            <p>{authError}</p>
            {loading && <SecondaryLoader></SecondaryLoader>}
        </div>
    );
};

export default SocialLogin;