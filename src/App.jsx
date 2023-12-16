import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  
  const displayResult = (value) => {
    setInput((prevInput) => prevInput + value);
  };
  const clearData = () => {
    setInput('');
  };
  const deleteData = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };
  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  
  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center bg-secondary'>
      <div style={{ width: '400px', height: '550px' }} className='bg-dark p-3 rounded'>
        <h3 style={{ height: '35px', color: 'white', textAlign: 'center' }}>Calculator</h3>
        <div style={{ width: '100%', height: '150px' }} className='d-flex justify-content-center align-items-center mt-5 text-light'>
          <p style={{ color: 'white' }} className="fw-bolder">{input}</p>
        </div>
        <div className='d-flex flex-wrap justify-content-between '>
          <button style={{backgroundColor:' rgb(213, 213, 213)',color:'black'}} className='mb-2' onClick={() => clearData()}>AC</button>
          <button style={{backgroundColor:' rgb(213, 213, 213)',color:'black'}}  onClick={() => deleteData()}>DEL</button>
          <button style={{backgroundColor:' rgb(213, 213, 213)',color:'black'}}  onClick={() => displayResult('%')}>%</button>
          <button style={{backgroundColor:'orange'}}  onClick={() => displayResult('/')}>/</button>

          <button className='mb-2'onClick={() => displayResult('7')}>7</button>
          <button onClick={() => displayResult('8')}>8</button>
          <button onClick={() => displayResult('9')}>9</button>
          <button onClick={() => displayResult('*')} style={{backgroundColor:'orange'}}>x</button>

          <button onClick={() => displayResult('4')} className='mb-2'>4</button>
          <button onClick={() => displayResult('5')}>5</button>
          <button onClick={() => displayResult('6')}>6</button>
          <button onClick={() => displayResult('-')} style={{backgroundColor:'orange'}}>-</button>

          <button onClick={() => displayResult('1')} className='mb-2'>1</button>
          <button onClick={() => displayResult('2')}>2</button>
          <button onClick={() => displayResult('3')}>3</button>
          <button onClick={() => displayResult('+')} style={{backgroundColor:'orange'}}>+</button>

          <button onClick={() => displayResult('0')} style={{width:'183px'}} className='mb-2'>0</button>
          <button onClick={() => displayResult('.')}>.</button>
          <button onClick={() => calculateResult('%')} style={{backgroundColor:'orange'}}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;



