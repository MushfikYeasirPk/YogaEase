import React, { useState, useEffect } from 'react';

function AnimatedTitle({ title }) {
  const [displayedTitle, setDisplayedTitle] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const titleLength = title.length;

    const interval = setInterval(() => {
      if (currentIndex < titleLength) {
        setDisplayedTitle(prevTitle => prevTitle + title[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100); // You can adjust the delay between each letter here

    return () => {
      clearInterval(interval);
    };
  }, [title]);

  return (
    <div>
      <h1>{displayedTitle}</h1>
    </div>
  );
}

export default AnimatedTitle;