import React from "react";
import "./CalcButton.css";
function CalcButton({ name, handleClick }) {
  return (
    <div>
      <button
        className="btn-number"
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
