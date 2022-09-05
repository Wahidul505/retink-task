import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const GoogleLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    useEffect(() => {
        user && navigate('/')
    }, [user, navigate]);

    useEffect(() => {
        loading ? setIsLoading(true) : setIsLoading(false);
        error && toast.error('Something went wrong', { id: "google_login_error" });
    }, [error, loading]);

    return (
        <div className=''>
            <div className='flex justify-center items-center gap-3'>
                <div className='border-b border-blue-600 w-1/3'>

                </div>
                <div>
                    Or
                </div>
                <div className='border-b border-blue-600 w-1/3'>

                </div>
            </div>
            <div className='mt-4'>
                {
                    !isLoading ?
                        <button
                            onClick={handleGoogleSignIn}
                            className='bg-gray-200 w-full h-12 flex justify-center items-center text-lg lg:text-2xl rounded-xl shadow gap-4'>
                            <FcGoogle className="text-2xl lg:text-3xl" /> <span>Google Sign In</span>
                        </button>
                        :
                        <button
                            disabled
                            className='bg-gray-200 w-full h-12 flex justify-center items-center text-lg lg:text-2xl rounded-xl shadow gap-4'>
                            <div className='h-8 w-8 rounded-full border-t-2 animate-spin border-blue-600'></div>
                        </button>
                }
            </div>
        </div>
    );
};

export default GoogleLogin;