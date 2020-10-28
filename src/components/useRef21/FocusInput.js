import React, { useEffect, useRef } from 'react';

function FocusInput() {
  /*
    useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。
    返回的 ref 对象在组件的整个生命周期内保持不变。它可以很方便地保存任何可变值
  */

  const inputRef = useRef(null);

  useEffect(() => {
    // 组件完成挂载时执行
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;
