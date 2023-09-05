import React, { useEffect } from 'react';
import UseClasses from '../Custom Hooks/UseClasses';
import './PopularClasses.css'
import AnimatedTitle from '../AnimatedTitle/AnimatedTitle';
import Aos from 'aos';
const PopularClasses = () => {
    const [PopClasses] = UseClasses();
    // console.log("Pop class", PopClasses);
    useEffect(()=>{
        Aos.init()
    })
    return (
        <div className='py-5'>
            <div className='bg-slate-900'>
            <AnimatedTitle title="| Popular Classes"></AnimatedTitle>
            </div>
           
            
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000" className='grid gap-6 md:grid-cols-3 sm:grid-cols-2 mx-16 mt-5'>
                {
                    PopClasses.slice(0, 6).map((SingleClass) =>
                       
                        <div className="box" key={SingleClass._id}>
                            <div className="Inscard">
                                <div className="imgBox">
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