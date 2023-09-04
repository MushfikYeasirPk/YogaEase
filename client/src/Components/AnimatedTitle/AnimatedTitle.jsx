import React, { useState, useEffect } from 'react';

function AnimatedTitle({ title }) {
    const [displayedTitle, setDisplayedTitle] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if (currentIndex < title.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedTitle(prevTitle => prevTitle + title[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, 300); // You can adjust the delay between each letter here
  
        return () => clearTimeout(timeoutId);
      }
    }, [title, currentIndex]);
  
    return (
      <div>
        <h1 className='bg-slate-800 py-5 text-center text-4xl font-bold border-b-4 border-t-4 border-indigo-500 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>{displayedTitle}</h1>
      </div>
    );
  }

export default AnimatedTitle;
