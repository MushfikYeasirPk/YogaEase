
import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../Components/Custom Hooks/useCart'

const Header = () => {

    const { user, logOut } = useContext(AuthContext)
    const [userName, setUserName] = useState('');
    const [ClassCart] = useCart();
    // console.log("Class len",ClassCart);

    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                console.log(error.message);
            });
    }

    const onMouseOver = () => {
        console.log(user.displayName);
        setUserName(user.displayName)
    }

    return (

        <div>

            <div className="navbar bg-black text-white">
                <div className="flex-none">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Home</NavLink></li>
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>About</NavLink></li>
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Gallery</NavLink></li>
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Schedule</NavLink></li>
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Pricing</NavLink></li>
                            <li><NavLink to='/classes' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Classes</NavLink></li>
                            <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Blog</NavLink></li>
                            <li><NavLink to='/instructors' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Instructors</NavLink></li>
                            <li><NavLink to='/classes' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Join Classes Instant</NavLink></li>

                            {
                                user ?
                                    <>

                                        <li className='cursor-pointer'><NavLink to='/dashboard/mycart' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}><FaShoppingCart></FaShoppingCart>Dashboard +{ClassCart?.length || 0}</NavLink>

                                        </li>
                                    </>
                                    : <></>
                            }

                        </ul>
                    </div>
                </div>
                <div className="flex-1">
                    <a className=" text-xl">YogaEase</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Home</NavLink></li>
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>About</NavLink></li>
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Gallery</NavLink></li>
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Schedule</NavLink></li>
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Pricing</NavLink></li>
                        <li><NavLink to='/classes' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Classes</NavLink></li>
                        <li><NavLink to='/' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Blog</NavLink></li>
                        <li><NavLink to='/instructors' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Instructors</NavLink></li>
                        <li><NavLink to='/classes' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}>Join Classes Instant</NavLink></li>


                    </ul>

                </div>
                <div >
                    {
                        user ?
                            <>
                                <div className="navbar-center hidden lg:flex">
                                    <ul className="menu menu-horizontal px-1">

                                        <li className='cursor-pointer'><NavLink to='/dashboard/mycart' className={({ isActive }) => (isActive ? 'text-blue-700' : 'default')}><FaShoppingCart></FaShoppingCart>Dashboard +{ClassCart?.length || 0}</NavLink>

                                        </li>
                                    </ul>
                                </div>

                                <div className="dropdown dropdown-end navbar-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div onMouseOver={onMouseOver} className="w-10 rounded-full">
                                            <img src={user?.photoURL} title={userName} />

                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                                        <li><Link onClick={handleLogout}>Logout</Link></li>
                                    </ul>
                                </div>
                            </> :
                            <>
                                <ul>
                                    <li>
                                        <Link to='/signIn'>
                                    <img className='w-5 h-5' src="user.png" alt="" />
                                        </Link>
                                    </li>
                                </ul>

                            </>
                    }



                </div>


            </div>

        </div>



    );
};

export default Header;