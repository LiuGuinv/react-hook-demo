import React from 'react';

function Title() {
  console.log('Rendering Title');
  return <h2>useCallback Hook优化性能</h2>;
}

export default React.memo(Title);
