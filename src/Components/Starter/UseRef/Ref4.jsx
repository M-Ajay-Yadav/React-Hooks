import React,{ useState, useRef } from 'react'

const Ref4 = () => {
  const [ name, setName] = useState('');
  const inputEmentnt = useRef();
  const HandleChange =() => {
    const inputValue = inputEmentnt.current.value
    const Type = inputEmentnt

    setName(inputValue);
    console.log(Type);
    // console.log(inputValue);

  }
  
  return (
    <div>
      <input type="text" onChange={HandleChange} ref={inputEmentnt} />
      <div id='divinput'>Name : {name}</div>

    </div>
  )
}

export default Ref4