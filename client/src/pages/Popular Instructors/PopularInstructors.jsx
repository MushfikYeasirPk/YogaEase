import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import UseInstructors from '../Custom Hooks/UseInstructors';
const PopularInstructors = () => {
    const [instructors] = UseInstructors();

    return (
        <div>
            <Fade right big>
                <h1 className='py-5 text-center text-4xl text-cyan-700 border-b-4 border-indigo-500'>Popular Instructors</h1>
            </Fade>
            
            <div className='grid gap-6 md:grid-cols-3 sm:grid-cols-2 mx-16 mt-5'>
                {
                    instructors.slice(0, 6).map((sigleInstructors) =>
                        <Fade bottom big className="card w-96 bg-base-100 shadow-xl" key={sigleInstructors._id}>
                            <figure><img src={sigleInstructors.image} alt="Shoes" /></figure>

                        </Fade>
                    )}

            </div>
        </div>


    );
};

export default PopularInstructors;