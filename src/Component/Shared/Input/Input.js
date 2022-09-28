import React from "react";
import "./Input.css"

function Input({ value, type, label, placeholder, ...rest }) {
  return (
    <div >
      <input  className="inputWrapper" type={type} value={value} placeholder={placeholder}{...rest} />
    </div>
  );
}

export default Input;
