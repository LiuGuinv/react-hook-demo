import React, { useState } from 'react';

function HookCounterThree() {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        placeholder="firtName"
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        placeholder="lastName"
      />
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default HookCounterThree;
