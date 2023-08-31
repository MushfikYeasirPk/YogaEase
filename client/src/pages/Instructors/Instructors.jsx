import React, { useEffect, useState } from 'react';

import LoadingSpinner from '../../Components/Loader/LoadingSpinner'
const Instructors = () => {
  const [instructors, setInstructors] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/instructors`)
      .then((res) => res.json())
      .then((result) => {
        setInstructors(result);
        setIsLoading(false);
      });
  }, []);
  
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  // console.log(instructors);
  return (
    <div>
      <h1 className='text-center text-4xl text-cyan-700 border-b-4 border-indigo-500'>Our Beloved Instructors</h1>
      <div className='grid gap-6 md:grid-cols-3 sm:grid-cols-2 mx-6 mt-5 my-10'>
        {
          instructors.map((sigleInstructors) =>
            <div className="card card-compact  bg-base-100 shadow-xl ">
              <figure><img className='h-[250px] w-full ' src={sigleInstructors.image} alt="Person Image" /></figure>
              <div className="card-body">
                <h2 className="text-xl border-b">Name: {sigleInstructors.name}</h2>
                <h2 className="text-xl  border-b"> Email: {sigleInstructors.email}</h2>

                {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div> */}
              </div>
            </div>
          )}

      </div>
    </div>
  );
};

export default Instructors;