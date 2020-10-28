// import React, { Component } from 'react';

// class HookMouse extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       x: 0,
//       y: 0,
//     };
//   }

//   logMousePosition = (e) => {
//     console.log('logMousePosition');
//     this.setState({ x: e.clientX, y: e.clientY });
//   };

//   componentDidMount() {
//     console.log('执行一次');
//     window.addEventListener('mousemove', this.logMousePosition);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('mousemove', this.logMousePosition);
//   }

//   render() {
//     return (
//       <div>
//         X - {this.state.x} Y - {this.state.y}
//       </div>
//     );
//   }
// }

// export default HookMouse;

// 钩子函数写法
import React, { useState, useEffect } from 'react';

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('logMousePosition');
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log('useEffect 执行一次');
    // 加第二个参数为空数组是因为想达到和componentDidMount一样只被调用一次，优化性能
    window.addEventListener('mousemove', logMousePosition);

    // return将会在组件卸载时执行，和componentWillUnmount效果一致，返回的内容是一些清理功能
    return () => {
      console.log('组件卸载');
      window.removeEventListener('mousemove', logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
