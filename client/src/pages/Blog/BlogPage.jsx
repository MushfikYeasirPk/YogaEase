import React from 'react'
import { blog } from './Blog'
import { Link } from 'react-router-dom'
function BlogPage() {
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-3 m-16 '>
        <div className='col-span-2'>

          {blog.map((singleBlog, index) => (
            <div key={index}>
              <img className='w-[650px] h-[400px]' src={singleBlog.img} alt="blog_img" />
              <p className=" text-[15px] text-[#646464] pt-8 pb-4">
                By <b>Admin</b> | {singleBlog.date} | Yoga
              </p>
              <h2 className="text-[25px] text-black font-bold mb-6">{singleBlog.title}</h2>
              <p className="font-medium text-[16px] text-[#646464] mb-2 lg:w-9/12">
                {singleBlog.description}
              </p>
              <Link to="/contact" className="relative inline-flex items-center justify-start px-6 py-3 mb-5 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Purchase Now</span>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <form className="flex">
            <input type="text" placeholder="Search Blog" className="input input-bordered input-success w-full max-w-xs" />
          </form>
          <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Categories
              </p>
              <span className="w-[40px] h-[3.5px] bg-purple-800"></span>
              <ul className="text-[16px] text-[#7e7e7e] font-medium mt-10">
                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-purple-800 ease-in duration-200">
                  <p>
                  <span className='text-xl'>&#8594;</span>  Body Building
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-purple-800 ease-in duration-200">
                  <p>
                  
                  <span className='text-xl'>&#8594;</span> Boxing
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-purple-800 ease-in duration-200">
                  <p>
                  <span className='text-xl'>&#8594;</span> Crossfit
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-purple-800 ease-in duration-200">
                  <p>
                  <span className='text-xl'>&#8594;</span> Fitness
                  </p>
                  <span>(4)</span>
                </li>

                <li className="flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-purple-800 ease-in duration-200">
                  <p>
                  <span className='text-xl'>&#8594;</span> Meditation
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-purple-800 ease-in duration-200">
                  <p>
                  <span className='text-xl'>&#8594;</span> Yoga
                  </p>
                  <span>(4)</span>
                </li>
              </ul>
            </div>
            {/* recent posts */}
            <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Recent Posts
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
              <div className="flex flex-col gap-7">
                {/*  */}
                <div className="flex gap-8">
                  <img src={'https://images.pexels.com/photos/6932883/pexels-photo-6932883.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=1'} alt="recent_img" className="w-[6rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2022
                    </p>
                    <p className="text-[16px] text-black hover:text-purple-800 ease-in duration-200 cursor-pointer font-bold">
                      Yoga For Everyone in 2022
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={'https://images.pexels.com/photos/6698513/pexels-photo-6698513.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="recent_img" className="w-[6rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2022
                    </p>
                    <p className="text-[16px] text-black hover:text-purple-800 ease-in duration-200 cursor-pointer font-bold">
                      Getting Back Into CrossFit
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={'https://images.pexels.com/photos/3286006/pexels-photo-3286006.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="recent_img" className="w-[6rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2022
                    </p>
                    <p className="text-[16px] text-black hover:text-purple-800 ease-in duration-200 cursor-pointer font-bold">
                      Meet Fitness Abassador Grace
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={'https://images.pexels.com/photos/8172941/pexels-photo-8172941.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="recent_img" className="w-[6rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2022
                    </p>
                    <p className="text-[16px] text-black hover:text-purple-800 ease-in duration-200 cursor-pointer font-bold">
                      The best are European Meditation Practitioner
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={'https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="recent_img" className="w-[6rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2022
                    </p>
                    <p className="text-[16px] text-black hover:text-purple-800 ease-in duration-200 cursor-pointer font-bold">
                      Learn Boxing With Our Trainer John
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-8">
                  <img src={'https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="recent_img" className="w-[6rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#646464] font-medium">
                      March 22, 2022
                    </p>
                    <p className="text-[16px] text-black hover:text-purple-800 ease-in duration-200 cursor-pointer font-bold">
                      How To Get Lean For The Summer
                    </p>
                  </div>
                </div>
              </div>
            </div>

              {/* popular tags */}
              <div className="flex flex-col bg-[#f8f8f8] my-[35px] p-[30px]">
              <p className="text-[18px] text-black font-bold mb-5">
                Popular Tags
              </p>
              <span className="w-[40px] h-[3.5px] bg-purple-800 mb-7"></span>
              <div className="flex gap-3 text-[16px] text-[#646464] font-medium flex-wrap">
                <p className="bg-white py-[4px] px-[14px] hover:text-purple-800 ease-in duration-200 cursor-pointer">
                  #Crossfit
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-purple-800 ease-in duration-200 cursor-pointer">
                  #Fitness
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-purple-800 ease-in duration-200 cursor-pointer">
                  #Gym
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-purple-800 ease-in duration-200 cursor-pointer">
                  #Meditation
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-purple-800 ease-in duration-200 cursor-pointer">
                  #Running
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-purple-800 ease-in duration-200 cursor-pointer">
                  #Workout
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-purple-800 ease-in duration-200 cursor-pointer">
                  #Yoga
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-purple-800 ease-in duration-200 cursor-pointer">
                  #Boxing
                </p>
              </div>
            </div>
        </div>

      </div>
    </>
  )
}

export default BlogPage