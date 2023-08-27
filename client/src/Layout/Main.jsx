import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Nav/Header';
import Footer from '../Components/Footer/Footer'
const Main = () => {
    return (
        <div>
        {/* <Navbar></Navbar> */}
        <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;