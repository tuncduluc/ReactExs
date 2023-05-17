import React, { useState } from 'react';

function ClickCounter() {
  const [count, setCount] = useState(0);

  const incButtonClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <div>Counter: {count}</div>
      <button onClick={incButtonClick}>Click here</button>
    </div>
  );
}

export default ClickCounter;
