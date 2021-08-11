import { useState, useEffect } from "react";
const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const onAddClick = () => {
    setCounterValue(counterValue + inputValue);
  };
  const onSubtractClick = () => {
    setCounterValue(counterValue - inputValue);
  };
  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2 className = {`${counterValue >= 100 ? "green":""}${counterValue <= -100 ? "red":""}`} data-testid="counter">{counterValue}</h2>
      <button onClick={onSubtractClick} data-testid="subtract-btn">
        -
      </button>
      <input
        data-testid="input"
        value={inputValue}
        type="number"
        style={{ textAlign: "center" }}
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      />
      <button onClick={onAddClick} data-testid="add-btn">
        +
      </button>
    </div>
  );
};

export default Counter;
