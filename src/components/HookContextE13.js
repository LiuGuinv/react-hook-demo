import React, { useContext } from 'react';
import HookContextF13 from './HookContextF13';
import { UserContext, ChannelContext } from '../App';

function ComponentE13() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {/* <HookContextF13 /> */}
      {user} - {channel}
    </div>
  );
}

export default ComponentE13;
