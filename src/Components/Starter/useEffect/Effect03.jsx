import React,{useState, useEffect} from 'react'

const Effect03 = () => {
    const [count, setCount] = useState(0);
    const [newCount, setNewCount] = useState(0);


    // useEffect(() => {
    //     document.title = `count:${count} newCount:${newCount}`;
    // },[count])
    // ============= OR ================
    useEffect(() => {
        document.title = `count:${count} newCount:${newCount}`;
    },[newCount])

  return (
 <>
    <div>
        <h3>{count} new Message !</h3>
        <button onClick={() => setCount(count + 1)}> Increase </button>

    </div>
    <div>
        <h3>{newCount} new Message !</h3>
        <button onClick={() => setNewCount(newCount + 5)}> Increase </button>

    </div>
 </>
  )
}

export default Effect03