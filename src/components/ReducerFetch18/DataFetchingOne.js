import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetchingOne() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError('');
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError('Request error!');
      });

    //第二参数为[]是为了只在组件挂载完成之后执行，即componentDidMount
  }, []);

  return (
    <div>
      {loading ? 'Loading' : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetchingOne;
