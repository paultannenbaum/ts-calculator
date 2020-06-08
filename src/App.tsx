import React from 'react';

const App = ({ readout = "0", current = "test" }) => {
  return (
    <div className="container">
    <div className="calculator">
      <input className="readout" disabled value={readout} />
      <div className="keyboard">
        <div className="numbers">
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button className="zero">0</button>
        </div>
        <div className="operands">
          <button className="reset">C</button>
          <button>+</button>
          <button>-</button>
          <button>×</button>
          <button>÷</button>
          <button className="equals">=</button>
        </div>
      </div>
    </div>
    <div className="state">
      Current State: { current }
    </div>
  </div>
  );
}

export default App;
