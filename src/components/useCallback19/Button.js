import React from 'react';

function Button({ handleClick, children }) {
  console.log(`Rendering button - ${children}`);

  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  );
}

export default React.memo(Button);
// React.memo()：组件仅在它的 props 发生改变的时候进行重新渲染。
// 通常来说，在组件树中 React 组件，只要有变化就会走一遍渲染流程。但是通过 PureComponent 和 React.memo()，我们可以仅仅让某些组件进行渲染。
