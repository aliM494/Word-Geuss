import React, { useEffect, useRef } from "react";
import Fcomponent from "./Fcomponent";

const ParentComponent = () => {
  const myInput = useRef();

  useEffect(() => {
    myInput.current.focus();
  }, []);

  return (
    <>
      <Fcomponent ref={myInput} />
    </>
  );
};

export default ParentComponent;
