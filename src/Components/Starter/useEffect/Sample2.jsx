import React, { useState,useEffect } from 'react';


const Sample2 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      // Run code here on mount and whenever count changes
      console.log('Effect ran. Count:', count);
      
      // Cleanup function (optional)
      return () => {
        console.log('Clean up effect');
      };
    }, [count]);
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  };
export default Sample2