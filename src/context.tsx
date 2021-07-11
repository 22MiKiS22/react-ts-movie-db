import React, { useState, createContext } from 'react';
//@ts-ignore
export const Context = createContext();
//@ts-ignore
const UserProvider = ({ children }) => {
  const [state, setState] = useState(undefined);

  return (
    <Context.Provider value={[state,setState]}>{children}</Context.Provider>
  );
}

export default UserProvider;
