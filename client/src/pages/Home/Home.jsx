import React from 'react';
import { Link } from 'react-router-dom';
import About from '../AboutUS/About';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PopularInstructors from '../Popular Instructors/PopularInstructors';
import PopularClasses from '../PopularClasses/PopularClasses';



const Home = () => {

  return (
    <div>
      <Carousel>
        <div className=''>
            <img src="https://img.freepik.com/free-photo/silhouette-woman-doing-yoga-beach_1286-47.jpg?1&w=740&t=st=1686236003~exp=1686236603~hmac=66079d0a9d838ca5346bcf6164294e7e17a566ae8fea9d120e07db4621904f8f" />
          <div>
          <p className='legend text-4xl'>Flexibility is a second power</p>
          </div>
          

        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/attractive-girl-with-long-black-hair-dressed-purple-doing-yoga-pose-one-leg-pigeon_1268-20287.jpg?w=740&t=st=1686236157~exp=1686236757~hmac=bb84c7b7749dc0fc85ebc3def63daed3245e0ea5bca10e764508fc42d5822df7" />
          <div>
          <p className='legend text-4xl'>Yoga is way to freedom</p>
          </div>

        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/young-man-yoga-pose_23-2147645674.jpg?w=740&t=st=1686236125~exp=1686236725~hmac=b13b75f6e4bef09764ed3815f6bda45611206502d96be288e8ce651af3e716c9" />
          <div>
          <p className='legend text-4xl'>Yoga ans meditation for busy people</p>
          </div>
        </div>
    
      </Carousel>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <About></About>
      


    </div>
  );
};

export default Home;