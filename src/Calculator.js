import React, {useState } from 'react';

function Calculator() {
    const [number1, setNumber1] = useState (0);
    const [number2, setNumber2] = useState (0);
    const [result, setResult] = useState (null);

    const handleNumber1 = (e) => setNumber1(parseInt(e.target.value)); 
    const handleNumber2 = (e) => setNumber2(parseInt(e.target.value)); 

    const add = () => setResult(number1 + number2);
    const subtract  = () => setResult(number1 - number2);
    const multiply  = () => setResult(number1 * number2);
    const divide = () => setResult(number1 / number2);

    return (
        <div className='calculator'>
        <input type='number' className='number-input' value={number1} onChange={handleNumber1}></input>
        <input type='number' className='number-input' value={number2} onChange={handleNumber2}></input>
        <p>result: {result != null ? result : " "}</p>

        <div className='button-container'>
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={multiply}>x</button>
        <button onClick={divide}>/</button>
        </div>
        </div>
    )
}

export default Calculator;