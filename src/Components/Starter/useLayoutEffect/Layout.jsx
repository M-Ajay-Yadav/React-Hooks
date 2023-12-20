import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current != null) {
      const dimension = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimension.height}px`;
      console.log("useEffect Toggled")
    }
  }, []); 
  useLayoutEffect(() => {
    if (textRef.current != null) {
      const dimension = textRef.current.getBoundingClientRect();
      textRef.current.style.paddingTop = `${dimension.height}px`;
      console.log("useLayoutEffect Toggled")
    }
  }, [toggle]); 

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle Me</button>
      <h2 ref={textRef}>Sample Text</h2>
    </div>
  );
};

export default Layout;
