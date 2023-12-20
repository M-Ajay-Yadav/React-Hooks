import React,{ useState, useEffect } from 'react'

const Sample6 = () => {

    const [state, setState] = useState();

    const [dumb, setDumb] = useState(0);
    
    useEffect(()=>
    {
      const newState = "...do a lot of calculations here that takes time"
      setState( newState )
    },[ dumb ]);
    return (
        <div>
    <button onClick={()=>setDumb(dumb+1)}>
      Click me!
    </button>
    


    </div>
  )
}

export default Sample6