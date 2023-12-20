import React, { useState, useEffect } from 'react';

const Effect04 = () => {
  const [time, setTime] = useState(0);
  const [buttonClick, setButtonClick] = useState(false);

  useEffect(() => {
    let timerId;

    if (buttonClick) {
      // Use setInterval and update the time every 1000 milliseconds (1 second)
      timerId = setInterval(() => {
        setTime((prevTime) => {
          console.log('Run useEffect', prevTime);
          return prevTime + 1;
        });
      }, 1000);
    }

    // Return the cleanup function to clear the interval when the component unmounts or when buttonClick is set to false
    return () => {
      clearInterval(timerId);
      console.log('Clean up time', time);
    };

  }, [buttonClick, time]);

  const handleButtonClick = () => {
    // When the button is clicked, set buttonClick to true to start the interval
    setButtonClick(true);
  };

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={handleButtonClick}>Start Time</button>
    </div>
  );
};

export default Effect04;
