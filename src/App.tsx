/// <reference path="./state-machine.d.ts" />
import React, { useState } from 'react';
import StateMachine from './state-machine';

const calculator = new StateMachine()

const App = () => {
  const[state, setState] = useState(calculator.state)
  const handleInput = (val: payload) => {
    calculator.transition(val);
    setState(calculator.state)
  }

  return (
    <div className="container">
    <div className="calculator">
      <input className="readout" disabled value={state.readout} />
      <div className="keyboard">
        <div className="numbers">
          <button onClick={() => handleInput(7)}>7</button>
          <button onClick={() => handleInput(8)}>8</button>
          <button onClick={() => handleInput(9)}>9</button>
          <button onClick={() => handleInput(4)}>4</button>
          <button onClick={() => handleInput(5)}>5</button>
          <button onClick={() => handleInput(6)}>6</button>
          <button onClick={() => handleInput(1)}>1</button>
          <button onClick={() => handleInput(2)}>2</button>
          <button onClick={() => handleInput(3)}>3</button>
          <button className="zero" onClick={() => handleInput(0)}>0</button>
        </div>
        <div className="operands">
          <button className="reset" onClick={() => {
            calculator.clear();
            setState(calculator.state);
          }}>C</button>
          <button onClick={() => handleInput('add')}>+</button>
          <button onClick={() => handleInput('subtract')}>-</button>
          <button onClick={() => handleInput('multiply')}>×</button>
          <button onClick={() => handleInput('divide')}>÷</button>
          <button className="equals" onClick={() => handleInput('equals')}>=</button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
