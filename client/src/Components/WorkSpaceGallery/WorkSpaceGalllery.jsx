import React from 'react'

function WorkSpaceGalllery() {
  return (
    <>
      <div className="flex flex-col text-center relative items-center my-5 ">
        <p className="text-black relative z-10 text-[15px] uppercase font-bold mb-10">
          GYMAT GALLERY
        </p>

        <h2 className="text-[3.4rem] font-bold mb-4">
          Our Workplace Gallery
        </h2>
        <p className="text-[#646464] font-medium text-[15px] ">
          Our Workplace Gallery features modern office, team collaboration,
          and fun culture.
          <br /> Attracts talents and showcases company's work atmosphere.
        </p>
      </div>
      <div className='flex mx-10 gap-4 my-5'>
        <div>
            <div>
          <img className='h-[400px] w-[632px]' src="https://cdn.pixabay.com/photo/2016/01/18/09/46/yoga-1146277_640.jpg" alt="" />
        </div>
        <div className='flex gap-2 mt-3'>
          <div>
            <img className='h-[250px] w-[316px]' src="https://cdn.pixabay.com/photo/2020/02/15/00/33/yoga-4849681_640.jpg" alt="" />
          </div>
          <div>
            <img className='h-[250px] w-[316px]' src="https://cdn.pixabay.com/photo/2019/09/19/14/37/yoga-4489430_640.jpg" alt="" />
          </div>
        </div>
      

        </div>
        <div className='flex flex-col'>
          <div className='flex gap-2 '>
            <div >
              <img className='h-[250px] w-[316px]' src="https://cdn.pixabay.com/photo/2016/11/19/16/48/woman-1840275_640.jpg" alt="" />
            </div>
            <div>
              <img className='h-[250px] w-[316px]' src="https://cdn.pixabay.com/photo/2022/09/19/14/46/monk-7465757_640.jpg" alt="" />
            </div>
          </div>
          <div className='mt-3'>
            <img className='h-[400px] w-[632px]' src="https://cdn.pixabay.com/photo/2016/02/03/22/10/women-1178187_960_720.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkSpaceGalllery