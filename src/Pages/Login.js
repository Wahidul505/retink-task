import React from 'react';
import auth from '../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../Components/GoogleLogin';
import spaceMan from '../images/space_man_login.png'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (error) {
            if (error?.code.includes("wrong-password")) {
                toast.error("Incorrect Password", { id: "incorrect_password" });
            }
            else if (error?.code.includes("user-not-found")) {
                toast.error("Invalid email address", { id: "user_not_found" });
            }
            else {
                error && toast.error("Something went wrong", { id: "other_error" });
            }
        }

        else if (user) {
            toast.success('Logged In!', { id: "logged_in" });
            navigate('/');
        }

    }, [user, error, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    useEffect(() => {
        loading ? setIsLoading(true) : setIsLoading(false);
    }, [loading]);


    return (
        <div className='h-screen flex items-center justify-center bg-gradient-to-b from-pink-500 to-blue-500'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-3/4 w-full md:w-5/6 h-full lg:h-5/6'>
                <div className='bg-blue-600 lg:rounded-l-lg hidden lg:flex lg:justify-center lg:items-center'>
                    <img src={spaceMan} alt="" className='w-96 h-96 form-animation' />
                </div>
                <div className='flex flex-col gap-6 w-11/12 m-auto h-5/6 lg:w-full lg:h-full p-6 lg:py-8 lg:px-16 bg-white rounded-lg lg:rounded-l-none lg:rounded-r-lg justify-center'>
                    <form onSubmit={handleLogin}
                        className='flex flex-col gap-4'>
                        <h1 className='text-3xl font-semibold text-gray-700 mb-6 text-center'>Login to your Account!</h1>
                        <input onChange={e => setEmail(e.target.value)}
                            type="email" placeholder='Enter Email' className='bg-gray-300 rounded-lg p-2 text-lg lg:text-xl' required />
                        <input onChange={e => setPassword(e.target.value)}
                            type="password" placeholder='Enter Password' className='bg-gray-300 rounded-lg p-2 text-lg lg:text-xl' required />
                        {
                            isLoading ?
                                <button type="submit" className='bg-blue-700 h-12 rounded-lg flex justify-center items-center' disabled>
                                    <div className='border-t-2 border-white rounded-full w-8 h-8 animate-spin'></div>
                                </button>
                                :
                                <button type="submit" className='bg-blue-700 h-12 text-white text-xl rounded-lg'>Login</button>
                        }
                        <Link to="/signup" className='text-purple-600 text-lg hover:text-blue-600'>Create an account</Link>
                    </form>
                    <GoogleLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;