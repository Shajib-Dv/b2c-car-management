/** @format */

import React, { useState } from "react";

function CustomInput({ label, value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative md:mb-6 w-full" data-te-input-wrapper-init>
      <input
        type="text"
        placeholder=""
        className={`inputCustom peer `}
        required
        value={value || " "}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <label
        htmlFor=""
        className={`labelCustom ${
          isFocused || value
            ? "-translate-y-[1.7rem] scale-[0.8] text-green-500 peer-focus:text-green-500"
            : ""
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export default CustomInput;
