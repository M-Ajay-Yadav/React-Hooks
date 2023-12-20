import React, { useEffect } from 'react';


const Sample1 = () => {
    useEffect(() => {
        // Run code here on mount
        console.log('Component mounted');
        
        // Cleanup function (optional)
        return () => {
          console.log('Component will unmount');
        };
      }, []); // Empty dependency array means it only runs on mount and unmount
    
      return <div>Example Component</div>;
    };
    
export default Sample1