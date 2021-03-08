import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutComponent = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(Math.random() * 99 + 99);
    }
  }, [value]);

//   useLayoutEffect(() => {
//     if (value === 0) {
//       setValue(Math.random() * 99 + 99);
//     }
//   }, [value]);

  console.log("render", value);
  return <div onClick={() => setValue(0)}>value: {value}</div>;
};

export default UseLayoutComponent;