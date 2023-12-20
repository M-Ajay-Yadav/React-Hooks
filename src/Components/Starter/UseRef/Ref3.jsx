import React,{ useRef, useState  } from 'react'

const REf3 = () => {
    const [text , setText] = useState('')
    const inputElement = useRef();
    const handleClick = () => {
        const inputvalue = inputElement.current.value
        // console.log(" Function run");
        // console.log(element.current);
        // element.current.style.width = '500px';
        // element.current.style.border ="none";
        // element.current.style.backgroundColor ="skyblue";
        setText(inputvalue);
        

    }
  return (
    <div>
        <input type="text" ref={inputElement} />
        <button onClick={handleClick}>Kick me</button>
        <div id="ids">Text Entered: {text}</div>
        
    </div>
  )
}

export default REf3