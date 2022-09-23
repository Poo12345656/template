import React from "react";

function Input({ value, type, label, placeholder, ...rest }) {
  return (
    <div>
      <input type={type} value={value} placeholder={placeholder}{...rest} />
    </div>
  );
}

export default Input;
