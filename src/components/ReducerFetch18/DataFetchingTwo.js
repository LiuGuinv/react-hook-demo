import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        error: '',
        post: action.payload,
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        error: 'Request error!',
        post: {},
      };
    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/2')
      .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_ERROR' });
      });

    //第二参数为[]是为了只在组件挂载完成之后执行，即componentDidMount
  }, []);

  return (
    <div>
      {state.loading ? 'Loading' : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;
