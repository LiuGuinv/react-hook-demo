import React from 'react';
import useCounter from '../../hooks/useCounter';

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(0, 1);

  return (
    <div>
      count: {count}
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterOne;
