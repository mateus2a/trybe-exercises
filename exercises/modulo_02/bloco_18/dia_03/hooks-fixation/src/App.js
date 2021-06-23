import React, { useEffect, useState } from 'react';

const App = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [numberIsMultiply, setNumberIsMultiply] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setInterval(() => {
     const number = Math.floor(Math.random() * 100);
     setRandomNumber(number);
     
      if (number % 5 === 0 || number % 3 === 0) {
        setNumberIsMultiply(...numberIsMultiply, number);
        setMessage('Acertou');
        if (setMessage('Acertou')) {
          setInterval(() => {
            setMessage('');
          }, 4000);
        }
      }
    }, 10000);
  }, []);

  return  (
    <>
      <h1>{ randomNumber }</h1>
      <p>{ message }</p>
    </>
  );
}

export default App;
