import React, { useState, useCallback } from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  /*
    useCallback()
    返回一个 memoized 回调函数。

    把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，该回调函数仅在某个依赖项改变时才会更新。当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用。

    useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
  */

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
