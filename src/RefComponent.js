import React, { useRef } from "react";

const RefComponent = () => {
  const ref = useRef(null);

  const focus = () => {
    console.log(ref);
    ref.current.focus();
  };

  return (
    <>
      <input ref={ref} />
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default RefComponent;
