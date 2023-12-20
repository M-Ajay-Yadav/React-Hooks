import React,{ useState, useEffect, useRef } from 'react'

const Ref1 = () => {
  const [name, setName] = useState('');
  // const [count, setCount ] = useState(0);

  // useEffect(() => {
  //   setCount((prevCount) => prevCount + 1);
  // })   // issue it continuesly counts the value 

  const count = useRef(0);// hear use ref creats meutable variable without causing rerender
  // console.log(count);

  useEffect(() => {
    count.current = count.current + 1;
  })
  


  return (
    <div>
      <h2>Ref</h2>
      <input type="text" onChange={(e) => setName(e.target.value)}/>
      <h3>name: {name}</h3>
      <h3>Renders : {count.current}</h3>

      
    </div>
  )
}

export default Ref1