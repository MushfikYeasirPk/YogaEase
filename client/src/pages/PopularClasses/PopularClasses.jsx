import React from 'react';
import UseClasses from '../Custom Hooks/UseClasses';
import { Fade } from 'react-awesome-reveal';

const PopularClasses = () => {
    const [PopClasses] = UseClasses();
// console.log("Pop class", PopClasses);
    return (
        <div className='py-5'>
            <h1 className='text-center text-4xl text-cyan-700 border-b-4 border-indigo-500'>Popular Classes</h1>
            <div className='grid gap-6 md:grid-cols-3 sm:grid-cols-2 mx-16 mt-5'>
                {
                    PopClasses.slice(0, 6).map((SingleClass) =>
                        <Fade left big className="card w-96 bg-base-100 shadow-xl" key={SingleClass._id}>
                            <figure><img src={SingleClass.image} alt="Shoes" /></figure>
                            
                        </Fade >
                    )}

            </div>
        </div>
    );
};

export default PopularClasses;