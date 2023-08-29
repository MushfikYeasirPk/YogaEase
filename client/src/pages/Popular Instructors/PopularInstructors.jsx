import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UseInstructors from '../Custom Hooks/UseInstructors';
const PopularInstructors = () => {
    const [instructors] = UseInstructors();

    return (
        <div>
            <div >
                <h1 className='py-5 text-center text-4xl text-cyan-700 border-b-4 border-indigo-500'>Popular Instructors</h1>
            </div>
            
            <div className='grid gap-6 lg:grid-cols-3 sm:grid-cols-2 mx-16 mt-5'>
                {
                    instructors.slice(0, 6).map((sigleInstructors) =>
                        <div   key={sigleInstructors._id}>
                            <figure><img className='h-[300px] w-[500px]'  src={sigleInstructors.image} alt="Shoes" /></figure>

                        </div>
                    )}

            </div>
        </div>


    );
};

export default PopularInstructors;