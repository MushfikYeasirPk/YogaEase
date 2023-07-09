import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Contact from '../pages/Contact/Contact'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Classes from "../pages/Classes/Classes";
import Pricing from "../components/Pricing/Pricing";
import Blog from "../pages/Blog/Blog";
import About from "../components/About/About";
import Schedule from "../Pages/Schedule/Schedule";
import Monday from "../Pages/Schedule/Monday";
import Tuesday from "../Pages/Schedule/Tuesday";
import Wednesday from "../Pages/Schedule/Wednesday";
import Thursday from "../Pages/Schedule/Thursday";
import Friday from "../Pages/Schedule/Friday";
import Saturday from "../Pages/Schedule/Saturday";
import Sunday from "../Pages/Schedule/Sunday";
import Gallery from "../Pages/Gallery/Gallery";
import GalleryPage1 from "../Pages/Gallery/GalleryPage1";
import GalleryPage2 from "../Pages/Gallery/GalleryPage2";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signup",
        element: <SignUp></SignUp>
      },
      {
        path: "classes",
        element: <Classes></Classes>
      },
      {
        path: "pricing",
        element: <Pricing></Pricing>
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "schedule",
        element: <Schedule></Schedule>,
        children:[
          {
            path: "monday",
            element: <Monday></Monday>
          },
          {
            path: "tuesday",
            element: <Tuesday></Tuesday>
          },
          {
            path: "wednesday",
            element: <Wednesday></Wednesday>
          },
          {
            path: "thursday",
            element: <Thursday></Thursday>
          },
          {
            path: "friday",
            element: <Friday></Friday>
          },
          {
            path: "saturday",
            element: <Saturday></Saturday>
          },
          {
            path: "sunday",
            element: <Sunday></Sunday>
          },
        ]
      },
      
      {
        path: "gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "gallery/page-1",
        element: <GalleryPage1></GalleryPage1>
      },
      {
        path: "gallery/page-2",
        element: <GalleryPage2></GalleryPage2>
      },

      
    ]


  },
  

]);

export default router;