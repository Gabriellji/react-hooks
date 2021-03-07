import React, { useState } from "react";

export const MyContext = React.createContext();

const initialState = {
  name: "Zheniya",
  surname: "Lalala",
};

const ContextProvider = (props) => {
  const [state, setState] = useState(initialState);
  return (
    <MyContext.Provider value={{ state, setState }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
