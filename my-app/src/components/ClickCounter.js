import React, { useEffect, useState } from 'react';

function ClickCounter({ onCounterChange }) {
  const [count, setCount] = useState(0);

  const incButtonClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    if(typeof onCounterChange === 'function') {
    onCounterChange(count);
    }
  }, [count, onCounterChange]);


  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={incButtonClick}>Click here</button>
    </div>
  );
}

export default ClickCounter;
