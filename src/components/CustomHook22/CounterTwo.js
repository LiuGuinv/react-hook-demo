import React from 'react';
import useCounter from '../../hooks/useCounter';

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 10);

  return (
    <div>
      count: {count}
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterTwo;
