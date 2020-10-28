import React, { useReducer } from 'react';

// 使用两个reducer做两个独立工作的计时器，处理多个具有相同状态的变量，避免合并
const initialState = 0;
const reducer = (state, action) => {
  // 接收执行的类别，返回一个新的state
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function HookReducer16() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <div>
        <div>Count Two - {countTwo}</div>
        <button onClick={() => dispatchTwo('increment')}>Increment</button>
        <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
        <button onClick={() => dispatchTwo('reset')}>Reset</button>
      </div>
    </div>
  );
}

export default HookReducer16;
