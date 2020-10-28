// 钩子函数写法
import React, { useState, useEffect } from 'react';

function HookEffectOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    // 可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。
    console.log('更新');
    document.title = `You clicked ${count} times`;
    // 第二个参数会自动对比count，只有当count有变化时才会渲染组件，相当于componentDidUpdate，优化了性能
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>click {count} times</button>
    </div>
  );
}

export default HookEffectOne;

//类写法
// import React, { Component } from 'react';

// class HookEffectOne extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//       name: '',
//     };
//   }

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times`;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('prevProps, prevState', prevProps, prevState);
//     // componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。可以在此处对 DOM 进行操作
//     // 你也可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语句里，
//     // 正如上述的例子那样进行处理，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。
//     if (prevState.count !== this.state.count) {
//       console.log('渲染');
//       document.title = `Clicked ${this.state.count} times`;
//     }
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.name}
//           onChange={(e) => this.setState({ name: e.target.value })}
//         />
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Clicked {this.state.count} times
//         </button>
//       </div>
//     );
//   }
// }

// export default HookEffectOne;
