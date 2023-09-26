/** @format */

import React, { useState } from "react";

function CustomInput2({ label, name }) {
  const [inputValue, setInputValue] = useState({});
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    setInputValue({ ...inputValue, [name]: e.target.value });
  };

  return (
    <div className="relative md:mb-6 w-full" data-te-input-wrapper-init>
      <input
        type="text"
        placeholder=""
        className={`inputCustom peer `}
        required
        value={inputValue[name] || " "}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor=""
        className={`labelCustom ${
          isFocused || inputValue[name]
            ? "-translate-y-[1.7rem] scale-[0.8] text-green-500 peer-focus:text-green-500"
            : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default CustomInput2;
