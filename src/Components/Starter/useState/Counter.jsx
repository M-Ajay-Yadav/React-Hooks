// import logo from './logo.svg';
import { useState } from 'react';
// import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
  }

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className="Counter">
      <button onClick={handleDecrement}>decrement</button>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </div>
  );
}

export default Counter;
