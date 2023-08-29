import React from 'react';
import UseClasses from '../Custom Hooks/UseClasses';
import './PopularClasses.css'
const PopularClasses = () => {
    const [PopClasses] = UseClasses();
    // console.log("Pop class", PopClasses);
    return (
        <div className='py-5'>
            <h1 className='text-center text-4xl text-cyan-700 border-b-4 border-indigo-500'>Popular Classes</h1>
            <div className='grid gap-6 md:grid-cols-3 sm:grid-cols-2 mx-16 mt-5'>
                {
                    PopClasses.slice(0, 6).map((SingleClass) =>
                        // <div  key={SingleClass._id}>
                        //     <figure><img className='h-[300px] w-[500px]' src={SingleClass.image} alt="Shoes" /></figure>
                            
                        // </div >

<div  className="box">
<div className="Inscard">
    <div  className="imgBox">
        <img src={SingleClass.image} alt="some image" />
    </div>
    <div className="details">
        <h2>{SingleClass.name} </h2>
    </div>
</div>
</div>




                    )}

            </div>
        </div>
    );
};

export default PopularClasses;