import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UseInstructors from '../Custom Hooks/UseInstructors';
import './PopularInstrcutors.css'
const PopularInstructors = () => {
    const [instructors] = UseInstructors();
    // console.log(instructors);
    return (
        <div>
            <div className='bg-slate-900'>
                <h1 className='py-5 text-center text-4xl font-bold border-b-4 border-t-4 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>Our Popular Coaches</h1>
            </div>
            <div className='mt-10'>
                <h1 className='text-black text-center uppercase text-3xl font-semibold'>Team Of Expert Coaches</h1>
                <p className='text-center text-black'>Expert team of coaches helps you succeed in any goal,<br />
                    personalized guidance and motivation provided!</p>
            </div>
            <div className='grid gap-3 lg:grid-cols-3 sm:grid-cols-2 mx-16 mt-5'>
                {
                    instructors.slice(0, 6).map((sigleInstructors) =>
                        <div className="box">
                            <div className="Inscard">
                                <div className="imgBox">
                                    <img src={sigleInstructors.image} alt="some image" />
                                </div>
                                <div className="details">
                                    <h2>{sigleInstructors.name} </h2>
                                </div>
                            </div>
                        </div>


                    )}

            </div>
        </div>


    );
};

export default PopularInstructors;