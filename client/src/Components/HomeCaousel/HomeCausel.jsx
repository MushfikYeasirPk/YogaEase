import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

function HomeCausel() {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/06/26/09/52/girl-4300034_960_720.jpg)' }}>
                        <div className="text-center text-white">
                            <h1 className="text-3xl font-bold mb-4">MAKE YOUR BODY & SOUL <br></br>
                                FIT & WELL</h1>
                            <Link to="/contact" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Join Classes Now</span>
                            </Link>
                        </div>
                    </div>


                </SwiperSlide>
                <SwiperSlide>

                <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/03/26/21/54/yoga-2176668_960_720.jpg)' }}>
                        <div className="text-center text-white">
                            <h1 className="text-3xl font-bold mb-4">MAKE YOUR BODY & SOUL <br></br>
                                FIT & WELL</h1>
                            <Link to="/contact" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Join Classes Now</span>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2020/03/29/18/33/girl-4981766_960_720.jpg)' }}>
                        <div className="text-center text-white">
                            <h1 className="text-3xl font-bold mb-4">MAKE YOUR BODY & SOUL <br></br>
                                FIT & WELL</h1>
                            <Link to="/contact" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Join Classes Now</span>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}

export default HomeCausel