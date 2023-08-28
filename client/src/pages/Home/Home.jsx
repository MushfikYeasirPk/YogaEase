import React from 'react';
import { Link } from 'react-router-dom';
import About from '../AboutUS/About';

import PopularInstructors from '../Popular Instructors/PopularInstructors';
import PopularClasses from '../PopularClasses/PopularClasses';
import HomeCausel from '../../Components/HomeCaousel/HomeCausel';



const Home = () => {

  return (
    <div>
    <HomeCausel></HomeCausel>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <About></About>
      


    </div>
  );
};

export default Home;