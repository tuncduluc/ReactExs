import React from 'react';
import useCounter from './HookCounter';

const ClickCounter = () => {
  const { counter, onInc, onDec, onReset, } = useCounter({ initialValue: 0, interval: 2});

  return (
    <div>
      <p>Count: {counter}</p>
      <button onClick={onInc}>Increment</button>
      <button onClick={onDec}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default ClickCounter;