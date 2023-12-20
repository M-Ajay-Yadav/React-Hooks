import React,{ useState, useReducer} from 'react';

const initialState = {count: 0}

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment' : 
        return{count: state.count +1};
        
        case 'decrement' : 
        return{count: state.count - 1};
        
        default:
            return state

    }
}
const Reducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);


    const HandleIncrement = () => {
        dispatch({ type: 'increment'})
    }
    const HandleDecrement = () => {
        dispatch({type: 'decrement'})
    }


    
    
  return (
    <div>
        <h2>Count: {state.count}</h2>
        <button onClick={HandleIncrement}>Increment</button>
        <button onClick={HandleDecrement}>Decrement</button>
    </div>
  )
}

export default Reducer
// const [ count, setCount] = useState(0);

// const HandleIncrement =( ) => {
//     setCount((prevCount) => prevCount + 1)
// }
// const HandleDecrement = () => {
//     setCount((prevCount) => prevCount - 1)

// }