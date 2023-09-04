import React from 'react'
import { Link } from 'react-router-dom'

function NeedYogaTrainer() {
    return (
        <>
            <section className="bg-black w-full h-auto mb-10 "style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/09/12/16/55/girl-1665173_960_720.jpg)' }}>
                <div className=" text-white flex ml-24 py-10 flex-col justify-start items-start">
                    <div>
                        <h2 className="text-[36px] font-bold">Need a Yoga Trainer?</h2>
                        <h3 className="text-[28px] font-bold ">
                            <span className="text-purple-700">Call:</span> +123456789
                        </h3>
                    </div>
                    
                    <Link to="/contact" className="relative inline-flex items-center justify-start px-6 py-3 mt-5  overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                        <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Join Classes Now</span>
                    </Link>
                </div>
            </section>

        </>
    )
}

export default NeedYogaTrainer