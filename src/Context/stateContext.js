import { createContext, useContext, useState } from 'react';

const Context = createContext();

export function GlobalContext({ children }) {
  const [state, setState] = useState();
  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
}
export function UseGlobalContext() {
  return useContext(Context);
}
