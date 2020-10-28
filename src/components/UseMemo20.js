import React, { useState, useMemo } from 'react';

function UseMemo20() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    console.log('incrementOne');
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    console.log('incrementTwo');
    setCounterTwo(counterTwo + 1);
  };

  // useMemo优化性能
  /**
    返回一个 memoized 值。

    把“创建”函数和依赖项数组作为参数传入 useMemo，它仅会在某个依赖项改变时才重新计算 memoized 值。这种优化有助于避免在每次渲染时都进行高开销的计算。

    记住，传入 useMemo 的函数会在渲染期间执行。请不要在这个函数内部执行与渲染无关的操作，诸如副作用这类的操作属于 useEffect 的适用范畴，而不是 useMemo。

    如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。

   */
  const isEven = useMemo(() => {
    // 对比：
    // 使用useMemo之前：调用incrementTwo也会触发isEven函数去计算
    /*
      使用useMemo之后：根据counterOne变化去触发isEven函数去计算，
      只有调用incrementOne，更改了counterOne才会触发isEven函数，调用incrementTwo并不会触发
    */
    console.log('isEven======');
    let i = 0;
    while (i < 2000000000) i++;
    // 判断奇数偶数
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? '偶数' : '奇数'}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default UseMemo20;
