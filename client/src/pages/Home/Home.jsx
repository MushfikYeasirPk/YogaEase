import React from 'react';
import PopularInstructors from '../../Components/Popular Instructors/PopularInstructors';
import PopularClasses from '../../Components/PopularClasses/PopularClasses';
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