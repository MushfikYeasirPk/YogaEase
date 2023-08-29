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
            <div >
                <h1 className='py-5 text-center text-4xl text-cyan-700 border-b-4 border-indigo-500'>Popular Instructors</h1>
            </div>

            <div className='grid gap-3 lg:grid-cols-3 sm:grid-cols-2 mx-16 mt-5'>
                {
                    instructors.slice(0, 6).map((sigleInstructors) =>
                        <div  className="box">
                            <div className="Inscard">
                                <div  className="imgBox">
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