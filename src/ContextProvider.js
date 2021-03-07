import React, { useState } from "react";

export const MyContext = React.createContext();

const initialState = {
  name: "Zheniya",
  surname: "Lalala",
};

const ContextProvider = (props) => {
  const [state, setState] = useState(initialState);

  const showSurname = () => state.surname;
  
  return (
    <MyContext.Provider value={{ state, setState, showSurname }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
