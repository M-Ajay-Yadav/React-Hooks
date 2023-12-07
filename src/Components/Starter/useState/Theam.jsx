// import logo from './logo.svg';
import { useState } from 'react';
import '../../../App.css';

function Theam() {
  const [Theam, setTheam] = useState('light');


  const handleTheamChange = () => {
    setTheam(prevTheam =>(prevTheam === 'light' ? 'dark' : 'light'));
  }

  return (
    <div className={`app ${Theam}`}>
      {/* <button onClick={handleDecrement}>decrement</button> */}
      <h1>Theam: ${Theam}</h1>
      <button onClick={handleTheamChange}>Theam change</button>
    </div>
  );
}

export default Theam;
