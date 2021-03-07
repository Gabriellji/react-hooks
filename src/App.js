import React, { useContext, useEffect, useState } from "react";

import MemoComponent from "./MemoComponent";
import { MyContext } from './ContextProvider';

function App() {
  const [count, setCount] = useState(0);
  // const [age, setAge] = useState(18);

  const context = useContext(MyContext);

  console.log(context)

  useEffect(() => {
    console.log('I am from useEffect hook')
  }, [count])

  const setName = () => context.setState({
    ...context.state,
    name: 'Diana'
  })

  return (
    
    <div className="App">
    {
      console.log('I am from render')
    }
    <MemoComponent/>
    <h1>{context.state.name}</h1>
    <h2>{context.showSurname()}</h2>
    <button onClick={() => setName()}>set name</button>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}


export default App;
