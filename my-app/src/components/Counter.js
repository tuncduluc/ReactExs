import React, { useState, useEffect } from 'react';
import CounterDisplay from './CounterDisplay';

const Counter = ({ initialValue = 0, incAmount, incInterval }) => {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval tick');
      setCount(prevCount => prevCount + incAmount);
    }, incInterval);

    return () => {
      clearInterval(interval);
    };
  }, [incAmount, incInterval]);

  return (
    <div>
      <CounterDisplay count={count} />
    </div>
  );
};

export default Counter;
