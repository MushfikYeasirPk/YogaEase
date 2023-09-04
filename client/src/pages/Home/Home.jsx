import React from 'react';
import PopularInstructors from '../../Components/Popular Instructors/PopularInstructors';
import PopularClasses from '../../Components/PopularClasses/PopularClasses';
import HomeCausel from '../../Components/HomeCaousel/HomeCausel';
import AboutCarts from '../../Components/About/AboutCarts';
import BmiCalc from '../../Components/BMI/BmiCalc'
import WorkSpaceGalllery from '../../Components/WorkSpaceGallery/WorkSpaceGalllery';
import NeedYogaTrainer from '../../Components/NeedYogaTrainer/NeedYogaTrainer';
import GetLatestNews from '../../Components/Get Latest News/GetLatestNews';


const Home = () => {

  return (
    <div>
    <HomeCausel></HomeCausel>
    <AboutCarts></AboutCarts>
      <PopularClasses></PopularClasses>
      <BmiCalc></BmiCalc>
      <WorkSpaceGalllery></WorkSpaceGalllery>
      <PopularInstructors></PopularInstructors>
    <NeedYogaTrainer></NeedYogaTrainer>
    <GetLatestNews></GetLatestNews>
      


    </div>
  );
};

export default Home;