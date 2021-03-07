import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('I am from useEffect hook')
  }, [count])


  return (
    
    <div className="App">
    {
      console.log('I am from render')
    }
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}


export default App;
