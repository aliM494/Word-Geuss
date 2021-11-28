import React, { forwardRef, useState } from "react";

let counter = 0;

const Fcomponent = (props, ref) => {
  const [name, setname] = useState("");

  const handleSetName = () => {
    setname(ref.current.value);
  };

  return (
    <div className="form-fa-group text-center mt-4 p-3">
      <h4 className="text-center text-dark">حدث کلمه</h4>
      <input
        className="form-control"
        ref={ref}
        type="text"
        autoComplete="off"
      />
      <button className="btn btn-warning my-3" onClick={handleSetName}>
        ثبت
      </button>
      <button
        className="btn btn-secondary my-3 mx-2"
        onClick={() => {
          ref.value = "";
        }}
      >
        مخفی
      </button>
      <br />

      <span>{counter++}</span>
    </div>
  );
};

export default forwardRef(Fcomponent);
