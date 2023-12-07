// import logo from './logo.svg';
import { useState } from 'react';
import '../../../App.css';

function Input() {
  // const [Theam, setTheam] = useState('light');
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");


  const handleCountChange = (e) => {
    // setTheam(prevTheam =>(prevTheam === 'light' ? 'dark' : 'light'));
    setCount(prevCount => prevCount + 1);
    setValue(e.target.value);
  }

  return (
    <div className='app'>
      {/* <button onClick={handleDecrement}>decrement</button> */}
      {/* <h1>Theam: ${Theam}</h1> */}
      <input type="text" placeholder='Enter the text' value={value} onChange={handleCountChange} />
      <h1>VAlue: {value} and changed : {count} many times</h1>
      {/* <button onClick={handleTheamChange}>Theam change</button> */}
    </div>
  );
}

export default Input;
