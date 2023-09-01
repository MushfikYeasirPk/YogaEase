import React, { useContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/Firebase.init';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const Register = () => {
    const navigate = useNavigate();
    const { registerUser, displayURl } = useContext(AuthContext);
    const auth = getAuth(app)
    // const [displayname, setDisplayname] = useState("");
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        // createUser(data.email, data.password)
        //     .then(result => {

        //         const loggedUser = result.user;
        //         console.log(loggedUser);

        //         updateUserProfile(data.name, data.photoURL)
        //             .then(() => {
        //                 const saveUser = { name: data.name, email: data.email }
        //                 fetch('', {
        //                     method: 'POST',
        //                     headers: {
        //                         'content-type': 'application/json'
        //                     },
        //                     body: JSON.stringify(saveUser)
        //                 })
        //                     .then(res => res.json())
        //                     .then(data => {
        //                         if (data.insertedId) {
        //                             reset();
        //                             Swal.fire({
        //                                 position: 'top-end',
        //                                 icon: 'success',
        //                                 title: 'Congrats You are a User now.',
        //                                 showConfirmButton: false,
        //                                 timer: 1000
        //                             });
        //                             navigate('/');
        //                         }
        //                     })



        //             })
        //             .catch(error => console.log(error))
        //     })
        if ((data.name, data.email, data.password, data.photourl)) {
            createUserWithEmailAndPassword(auth, data.email, data.password)
                .then((userCredential) => {
                    const saveUser = { name: data.name, email: data.email }
                           console.log(saveUser);
                        fetch('https://yogaease.vercel.appusers', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                        .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    const user = userCredential.user;
                    console.log("User data",user);
                    displayURl(data.photourl, data.name)

                        .then(() => {
                           
                           console.log('User created');
                        })

                        .catch((error) => {
                            console.log(error.message);
                            setError(error.message)
                        })
                  

                })
            
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    

                });
        }
    };





    return (
        <div className='flex items-center justify-center mt-5 mb-5'>
            <div className="lg:flex items-center justify-center">
                <div className="bg-slate-300 m-auto w-96 rounded-md">

                    <form onSubmit={handleSubmit(onSubmit)} className=" rounded-lg px-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="useremail">
                                User Name
                            </label>
                            <input {...register("name", { required: true })}
                                className=" form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" name='name'
                                type="text"
                                placeholder="Enter your Name"
                            />
                            {errors.name && <span className="text-red-500">Plases add name</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="useremail">
                                User Email
                            </label>
                            <input {...register("email", { required: true })}
                                className=" form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" name='email'
                                type="email"
                                placeholder="Enter your email"
                            />
                            {errors.email && <span className="text-red-500">Please add Email</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input {...register("password", {
                                required: true,
                                minLength: 6,

                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password" password='password'
                                type="password"
                                placeholder="Enter your password"
                            />
                            {errors.password?.type === 'required' && <p className="text-red-500">Plases Put Password</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-500">Password must add a Capital letter ans a special character</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                                Photo Url
                            </label>
                            <input {...register("photourl", { required: true })}
                                className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="url" password='url'
                                type="url"
                                placeholder="Enter your Photo URL"
                            />
                            {errors.photourl && <span className="text-red-500">Please add photo URL</span>}
                        </div>


                        <div className="flex items-center justify-between">
                        <Link to="" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Sign Up</span>
                            </Link>


                            <Link className="inline-block align-baseline font-bold text-sm text-purple-700 hover:text-purple-800" href="#">
                                Forgot Password?
                            </Link>
                        </div>

                    </form>
                    <p className="text-center text-lg mb-5">
                        Already have an account?{' '}
                        <Link to='/logIn' className="font-bold text-purple-700 hover:text-purple-800 hover:underline " href="#">
                            Sign in
                        </Link>
                    </p>
                </div>
                <div className=" h-[700px] w-[600px] lg:text-left p-10 ">
                    <img className='lg:mt-20' src="signInSignUp.svg" alt="" />
                    
                </div>
            </div>
        </div>
    );
};


export default Register;