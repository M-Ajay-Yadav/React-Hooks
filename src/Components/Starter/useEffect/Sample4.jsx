import React, { useState, useEffect } from 'react';


const Sample4 = () => {
//Run Effect Once:
// Run an effect only once after the initial render (equivalent to componentDidMount in class components).




    useEffect(() => {
        // Run code here once after the initial render
        console.log('Effect ran once');
      }, []);
    
      return <div>Example Component</div>;
    };
    
export default Sample4