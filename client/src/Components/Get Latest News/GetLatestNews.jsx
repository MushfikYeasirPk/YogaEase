import React, { useEffect } from 'react'
import Aos from 'aos'
function GetLatestNews() {
    useEffect(()=>{
        Aos.init()
    })
    return (
        <>
            <div className="lg:flex   items-center justify-center gap-5">
                <div className='' data-aos="fade-right">
                    <h2 className="text-2xl font-bold text-gray-900">
                        Get the latest news!
                    </h2>
                </div>


                    <div className="lg:flex gap-8" data-aos="fade-left">
                        <div>
                            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                        </div>
                        <div>
                            <button type="submit" className="btn relative inline-flex items-center justify-start px-6 py-1 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Sign Up</span >
                            </button>
                        </div>

                    </div>
              </div>  

        </>
    )
}

export default GetLatestNews