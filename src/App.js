// import React from 'react';
// import './App.css';
// import HookContextC13 from './components/HookContextC13';

// // 使用Context，将数据从App传到C、E、F
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

// function App() {
//   return (
//     <div className="App">
//       <UserContext.Provider value={'Hertha'}>
//         <ChannelContext.Provider value={'Girl'}>
//           <HookContextC13 />
//         </ChannelContext.Provider>
//       </UserContext.Provider>
//     </div>
//   );
// }

// export default App;

// userReducer + userContext-----------------------------------------
/*
    App.js
      |
  ---------
  |   |   |
  A   B   C
      |   |
      D   E
          |
          F
*/
// import React, { useReducer } from 'react';
// import './App.css';
// import ComponentA from './components/Reducer_Context17/ComponentA';
// import ComponentB from './components/Reducer_Context17/ComponentB';
// import ComponentC from './components/Reducer_Context17/ComponentC';

// export const CountContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   // 接收执行的类别，返回一个新的state
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, initialState);

//   return (
//     <CountContext.Provider
//       value={{ countState: count, countDispatch: dispatch }}
//     >
//       <div className="App">
//         Count - {count}
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </div>
//     </CountContext.Provider>
//   );
// }

// export default App;
// ======================================================================

import React from 'react';
import UserForm from './components/CustomHook22/UserForm';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <UserForm />
    </div>
  );
}

export default App;
