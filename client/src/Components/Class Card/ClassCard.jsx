import React from 'react';
import { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';
import useCart from '../Custom Hooks/useCart';

const ClassCard = ({ sigleClasses }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart()
    const { user } = useContext(AuthContext);
    const handleClassAdd = (sigleClasses) => {
        console.log(sigleClasses);
        if (user && user.email) {
            const Classes = { clsssigleClassesId: sigleClasses._id, instructorName: sigleClasses.instructorName, image: sigleClasses.image, price: sigleClasses.price, email: user.email, ClassName: sigleClasses.name }
            fetch('http://localhost:5000/classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(Classes)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({

                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Added on the cart',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to Select Classes',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
console.log("log");
                navigate('/logIn', { state: { from: location } })
                }
            })
        }







    }
    return (
        <div>
            {sigleClasses.availableSeats == 0 ?
                <>
                    <div className="card  card-compact bg-red-500 shadow-xl">
                        <figure><img className='h-[250px] w-full ' src={sigleClasses.image} alt="Person Image" /></figure>
                        <div className="card-body">
                            <h2 className="card-title border-b">Class Name: {sigleClasses.name}</h2>
                            <h2 className="card-title border-b"> Instructor Name: {sigleClasses.instructorName}</h2>
                            <h2 className="card-title border-b"> Price: ${sigleClasses.price}</h2>
                            <h2 className="card-title border-b"> Available sits: {sigleClasses.availableSeats}</h2>
                            {
                                sigleClasses.availableSeats == 0 ?
                                    <>
                                        <div className="card-actions justify-end " disabled>
                                           <p className='text-xl'>Please Chose Antoher Class</p>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="card-actions justify-end ">
                                            <button onClick={() => handleClassAdd(sigleClasses)} className="btn btn-outline">Select</button>
                                        </div>
                                    </>
                            }


                        </div>
                    </div>

                </>

                :
                <>
                    <div className="card  card-compact  bg-base-100 shadow-xl">
                        <figure><img className='h-[250px] w-full ' src={sigleClasses.image} alt="Person Image" /></figure>
                        <div className="card-body">
                            <h2 className=" text-xl border-b">Class Name: {sigleClasses.name}</h2>
                            <h2 className="text-xl border-b"> Instructor Name: {sigleClasses.instructorName}</h2>
                            <h2 className=" text-xl border-b"> Price: ${sigleClasses.price}</h2>
                            <h2 className=" text-xl border-b"> Available sits: {sigleClasses.availableSeats}</h2>
                            {
                                sigleClasses.availableSeats == 0 ?
                                    <>
                                        <div className="card-actions justify-end ">
                                            <button className="btn btn-outline " disabled>Select</button>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="card-actions justify-end ">
                                            <Link to="" onClick={() => handleClassAdd(sigleClasses)} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Enroll Now</span>
                                            </Link>





                                        </div>
                                    </>
                            }


                        </div>
                    </div>
                </>

            }
        </div>

    );
};

export default ClassCard;