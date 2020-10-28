// import React, { Component } from 'react';

// class IntervalCounter11 extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(this.tick, 1000);
//   }

//   tick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   componentWillUnmount() {
//     clearInterval(this.tick);
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//       </div>
//     );
//   }
// }

// export default IntervalCounter11;

// 钩子函数写法=====================================
import React, { useState, useEffect } from 'react';

function IntervalCounter11() {
  const [count, setCount] = useState(0);

  const tick = () => {
    // 计时器方法2：setCount使用上一个计时变量+1，useEffect添加第二个参数，为[]
    // setCount(prevCount => prevCount + 1);
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };

    // 计时器方法1：useEffect添加第二个参数，包含计时变量
  }, [count]);

  return <div>{count}</div>;
}

export default IntervalCounter11;
