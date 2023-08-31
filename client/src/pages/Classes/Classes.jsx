import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../../Components/Loader/LoadingSpinner'
import ClassCard from '../../Components/Class Card/ClassCard'
const Classes = () => {
  
    const [isLoading, setIsLoading] = useState(true);
    const [Classes, setClasses] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/classes`)
            .then((res) => res.json())
            .then((result) => {
                setClasses(result);
                setIsLoading(false);
            });
    }, []);
    console.log(Classes);

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
      }
   
    return (
        <div>
            <h1 className='text-center text-4xl text-cyan-700 border-b-4 border-indigo-500'>Our Ongoing Classes</h1>
            <div className='grid gap-10 lg:grid-cols-3 sm:grid-cols-2 mx-6 my-10'>
                {
                    Classes.map((sigleClasses) =>
                    
                        
                        <ClassCard sigleClasses={sigleClasses}></ClassCard>
                    )}

            </div>
        </div>
    );
};

export default Classes;