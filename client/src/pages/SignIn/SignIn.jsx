import React, { useEffect, useState } from 'react';
import app from '../../firebase/Firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useLocation, redirect, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import AOS from 'aos';

import 'aos/dist/aos.css'
const SignIn = () => {
    useEffect(() => {  
        AOS.init();
      });
    const [success, setSuccess] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const [userInfo, setuserInfo] = useState({})
    const auth = getAuth(app)
    const goolgeProvider = new GoogleAuthProvider()
    const from = location.state?.from?.pathname || '/'
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        setSuccess('')
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                setSuccess('Sign in successfully')
                navigate(from, { replace: true })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // setError(errorMessage)
            });

    };


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, goolgeProvider)
            .then(result => {

                const user = result.user
                console.log(user);
                const saveUser = { name: user.displayName, email: user.email }
                fetch('https://yogaease.vercel.appusers', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
                setuserInfo(user)

            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then((result) => {
                // Sign-out successful.
                console.log(result);
                setuserInfo(null)
            })
            .catch((error) => {
                console.log(error.message);
            });
    }




    return (
        <div className='lg:flex md:flex items-center justify-center'>
            <div className="lg:flex md:flex h-screen items-center">
                <div data-aos="fade-right" data-aos-duration="2000" className="m-auto w-96">

                    <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-300 rounded-lg px-8 py-10 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                                User Email
                            </label>
                            <input   {...register("email", { required: true })}
                                className=" form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" name='email'
                                type="email"
                                placeholder="Enter your email" required
                            />
                            {errors.exampleRequired && <span>Please put email</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input  {...register("password", { required: true })}
                                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" password='password'
                                type="password"
                                placeholder="Enter your password" required
                            />
                            {errors.exampleRequired && <span>Please put password</span>}
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="btn relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Sign In</span >
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-purple-700 hover:text-purple-800" href="#">
                                Forgot Password?
                            </a>

                        </div>

                        <div className='text-green-500 text-center mt-2 font-bold'><p>{success}</p></div>
                    </form>
                    <p className="text-center text-lg mb-2">
                        Don't have an account?{' '}
                        <Link to='/register' className="font-bold text-purple-700 hover:text-purple-800hover:underline" href="#">
                            Sign up
                        </Link>
                    </p>
                    {/* userInfo ? SIng out : Sign in */}
                    {userInfo ?
                        <div className=''>
                            <div className="cursor-pointer">
                                <img onClick={handleGoogleSignIn}

                                    className=" social-button"
                                    src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                                    alt=""
                                />
                            </div>
                        </div>

                        :

                        <div>
                            <button onClick={handleGoogleSignOut} className='btn btn-success'>Google Sign Out</button>

                        </div>
                    }

                </div>
                <div data-aos="fade-left" data-aos-duration="3000" className=" h-[700px] w-[600px] lg:text-left p-10 ">
                    <img className='lg:mt-20' src="signInSignUp.svg" alt="" />

                </div>

            </div>

        </div>
    );
};

export default SignIn;

