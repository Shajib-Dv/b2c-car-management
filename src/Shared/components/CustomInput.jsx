import React, { useState } from "react";

function CustomInput({ label, value, onChange, type }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <>
      {!type ? (
        <div className="relative md:mb-5 w-full" data-te-input-wrapper-init>
          <input
            type="text"
            placeholder=""
            className={`inputCustom peer `}
            required
            defaultValue={value}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <label
            htmlFor=""
            className={`labelCustom peer-focus:-translate-y-[1.7rem] ${
              isFocused || value
                ? "-translate-y-[1.7rem] scale-[0.8] text-green-500 peer-focus:text-green-500"
                : ""
            }`}
          >
            {label}
          </label>
        </div>
      ) : (
        <div className="relative md:mb-5 w-full" data-te-input-wrapper-init>
          <textarea
            placeholder=""
            className={`inputCustom peer `}
            required
            value={value}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <label
            htmlFor=""
            className={`labelCustom peer-focus:-translate-y-[0.2rem] ${
              isFocused || value
                ? "-translate-y-[1.7rem] scale-[0.8] text-green-500 peer-focus:text-green-500"
                : ""
            }`}
          >
            {label}
          </label>
        </div>
      )}
    </>
  );
}

export default CustomInput;
