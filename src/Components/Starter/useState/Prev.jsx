import { useState } from 'react';
import '../../../App.css';

function Prev() {
const [details, setDetails] = useState({ counter:0, value:""})


  const handleChange = (e) => {
    // setDetails(e.target.value);

    setDetails((prevDetails) => ({
        ...prevDetails,
        value: e.target.value,
        counter: prevDetails.counter+ 1,
    })  );
  };

  const handleCount = () => {
    // setCount(prevCount => prevCount + 1);
    // setDetails({ counter : details.counter + 1});

    setDetails((prevDetails) => ({
        ...prevDetails,
        counter: prevDetails.counter + 1,
    })
    );
   
  };

  return (
    <div className='app'>
  
      <input type="text" placeholder='Enter the text' value={details.value} onChange={handleChange} />
      <h1>VAlue: {details.value} and button clicked : {details.counter} many times</h1>
      <button onClick={handleCount}> change count</button>
    </div>
  );
}

export default Prev;
