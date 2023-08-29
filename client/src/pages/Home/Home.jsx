import React from 'react';
import { Link } from 'react-router-dom';
import About from '../AboutUS/About';

import PopularInstructors from '../Popular Instructors/PopularInstructors';
import PopularClasses from '../PopularClasses/PopularClasses';
import HomeCausel from '../../Components/HomeCaousel/HomeCausel';
import AboutCarts from '../../Components/About/AboutCarts';



const Home = () => {

  return (
    <div>
    <HomeCausel></HomeCausel>
    <AboutCarts></AboutCarts>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
    
      


    </div>
  );
};

export default Home;