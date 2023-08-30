import React from 'react'
import { blog } from './Blog'
import { Link } from 'react-router-dom'
function BlogPage() {
  return (
    <>
      <div className='grid lg:grid-cols-3 gap-4 m-8 '>
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
          <p>hi</p>
        </div>

      </div>
    </>
  )
}

export default BlogPage