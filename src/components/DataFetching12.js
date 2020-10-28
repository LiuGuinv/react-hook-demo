// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function DataFetching12() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then((res) => {
//         console.log(res);
//         setPosts(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     // 加上第二个参数为[]，是为了达到componentDidMount效果，只执行一次，如果不加将会无限循环请求接口
//   }, []);

//   return (
//     <div>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DataFetching12;

// 单个显示--------------------------------------------------------
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function DataFetching12() {
//   const [post, setPost] = useState({});
//   const [id, setId] = useState(1);

//   useEffect(() => {
//     axios
//       .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((res) => {
//         console.log(res);
//         setPost(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     // 加上第二个参数为[id]，是为了达到componentDidUpdate效果，id有变化，组件更新之后执行渲染
//   }, [id]);

//   return (
//     <div>
//       <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
//       <p>{post.title}</p>
//     </div>
//   );
// }

// export default DataFetching12;

// 点击按钮获取单个数据进行显示--------------------------------------------------------
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching12() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleClick}>Fetch post</button>
      <p>{post.title}</p>
    </div>
  );
}

export default DataFetching12;
