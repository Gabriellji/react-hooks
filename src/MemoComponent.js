import React, { useMemo, useState } from "react";

const sum = (n) => {
  console.log("works");
  return n + n;
};

const MemoComponent = () => {
  const [num, setNum] = useState(1);
  const [isGreen, setIsGreen] = useState(true);
  const result = sum(num);
//   const result = useMemo(() => sum(num), [num]);

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "green" : "red" }}
      >
        Example
      </h1>
      <h2>Sum {result}</h2>
      <button onClick={() => setNum(num + 1)}>➕</button>
    </div>
  );
};

export default MemoComponent;
