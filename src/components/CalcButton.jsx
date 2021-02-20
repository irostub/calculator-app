import React from "react";

function CalcButton({ name, handleClick }) {
  return (
    <div>
      <button
        onClick={() => {
          handleClick(name);
        }}
      >
        {name}
      </button>
    </div>
  );
}

export default CalcButton;
