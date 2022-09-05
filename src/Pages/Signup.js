import React from 'react';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../Components/GoogleLogin';
import spaceMan from '../images/space_man_signup.png';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        password !== confirmPassword ? setPasswordError("Password Didn't match") : setPasswordError("");
    }, [password, confirmPassword]);

    useEffect(() => {
        if (error) {

            if (error?.code.includes("email-already-in-use")) {
                toast.error("Email Already in Use", { id: "email_exist_error" });
            }
            else if (error?.code.includes("weak-password")) {
                toast.error("Password should be at least 6 characters", { id: "password_error" });
            }
            else {
                error && toast.error("Something went wrong", { id: "other_error" });
            }
        }
        else if (user) {
            toast.success('Successfully Created Account!', { id: "account_created" });
            navigate('/');
        }

    }, [user, error, navigate]);

    const handleSignup = (e) => {
        e.preventDefault();
        if (passwordError) {
            toast.error("Password Didn't match");
            return;
        }
        else {
            createUserWithEmailAndPassword(email, password)
        }
    }

    useEffect(() => {
        loading ? setIsLoading(true) : setIsLoading(false);
    }, [loading]);


    return (
        <div className='h-screen flex items-center justify-center bg-gradient-to-b from-pink-500 to-blue-500'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:w-3/4 w-full md:w-5/6 h-full lg:h-5/6'>
                <div className='bg-blue-600 lg:rounded-l-lg hidden lg:flex lg:justify-center lg:items-center'>
                    <img src={spaceMan} alt="" className='w-96 form-animation' />
                </div>
                <div className='flex flex-col gap-6 w-11/12 m-auto h-5/6 lg:w-full lg:h-full p-6 lg:py-8 lg:px-16 bg-white rounded-lg lg:rounded-l-none lg:rounded-r-lg justify-center'>
                    <form onSubmit={handleSignup}
                        className='flex flex-col gap-4'>
                        <h1 className='text-3xl font-semibold text-gray-700 mb-6 text-center'>Create a new account</h1>
                        <input onChange={e => setEmail(e.target.value)}
                            type="email" placeholder='Enter Email' className='bg-gray-300 rounded-lg p-2 text-lg lg:text-xl' required />
                        <input onChange={e => setPassword(e.target.value)}
                            type="password" placeholder='Enter Password' className='bg-gray-300 rounded-lg p-2 text-lg lg:text-xl' required />
                        <input onChange={e => setConfirmPassword(e.target.value)}
                            type="password" placeholder='Confirm Password' className='bg-gray-300 rounded-lg p-2 text-lg lg:text-xl' required />
                        {passwordError && <p className='text-red-500 text-sm -mt-3'>{passwordError}</p>}
                        {
                            isLoading ?
                                <button type="submit" className='bg-blue-700 h-12 rounded-lg flex justify-center items-center' disabled>
                                    <div className='border-t-2 border-white rounded-full w-8 h-8 animate-spin'></div>
                                </button>
                                :
                                <button type="submit" className='bg-blue-700 h-12 text-white text-xl rounded-lg'>Signup</button>
                        }
                        <Link to="/login" className='text-purple-600 text-lg hover:text-blue-600'>Login to your account</Link>
                        <GoogleLogin />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;