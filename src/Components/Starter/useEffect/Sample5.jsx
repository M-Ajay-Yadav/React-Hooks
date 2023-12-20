import React, { useState, useEffect } from 'react';

const Sample5 = () => {
  const [shouldRunEffect, setShouldRunEffect] = useState(true);

  useEffect(() => {
    if (shouldRunEffect) {
      // Run code here based on some condition
      console.log('Effect ran');
    }

    // Cleanup function (optional)
    return () => {
      console.log('Clean up effect');
    };
  }, [shouldRunEffect]);

  return (
    <div>
      <p>Should Run Effect: {shouldRunEffect ? 'Yes' : 'No'}</p>
      <button onClick={() => setShouldRunEffect(!shouldRunEffect)}>
        Toggle Effect
      </button>
    </div>
  );
};

export default Sample5;
