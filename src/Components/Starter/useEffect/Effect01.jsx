import React,{useState, useEffect} from 'react'

const Effect01 = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `${count} new Message`;
    })
  return (
    <div>
        <h3>{count} new Message !</h3>
        <button onClick={() => setCount(count + 1)}> Increase </button>

    </div>
  )
}

export default Effect01