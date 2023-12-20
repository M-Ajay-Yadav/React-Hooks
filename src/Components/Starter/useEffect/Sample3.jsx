import React, { useState,useEffect } from 'react';


const Sample3 = () => {

    //Run Cleanup on Unmount:
// Run a cleanup function when the component is about to unmount (equivalent to componentWillUnmount).
    useEffect(() => {
        // Run code here on mount
    
        // Cleanup function (runs on unmount)
        return () => {
          console.log('Component will unmount');
        };
      }, []);
    
      return <div>Example Component</div>;
    };
    
export default Sample3