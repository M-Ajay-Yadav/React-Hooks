import React,{ useRef } from 'react'

const REf2 = () => {
    const element = useRef();
    const handleClick = () => {
        // console.log(" Function run");
        console.log(element.current);
        element.current.style.width = '500px';
        element.current.style.border ="none";
        element.current.style.backgroundColor ="skyblue";

    }
  return (
    <div>
        <input type="text" ref={element} />
        <button onClick={handleClick}>Kick me</button>
        
    </div>
  )
}

export default REf2