import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState(initialValue);

  return (
    <MyContext.Provider value={{ globalVariable, setGlobalVariable }}>
      {children}
    </MyContext.Provider>
  );
};

export const useGlobalVariable = () => {
  return useContext(MyContext);
};
