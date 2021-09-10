import React from "react";

const Inp = ({
  label,
  placeholder,
  value,
  onChange,
  register,
  inputName,
  type,
  validateMessage,
}) => {
  return (
    <>
      <div className="mb-3 flex flex-col items-center">
        {label}
        {register ? (
          <>
            <input
              {...register(inputName?.toString())}
              type={type}
              name={inputName}
              id="input"
              className={`t_input ${label ? "w-72" : "w-100"}`}
              placeholder={placeholder}
              value={value || ""}
              onChange={(input) => onChange(input)}
            ></input>
            {validateMessage && (
              <p className="text-center t_err">{validateMessage}</p>
            )}
          </>
        ) : (
          <>
            <input
              type={type}
              name={inputName}
              id="input"
              className={`t_input ${label ? "w-72" : "w-100"} `}
              placeholder={placeholder}
              value={value || ""}
              onChange={(input) => onChange(input)}
            ></input>
            {validateMessage && (
              <p className="text-center t_err">{validateMessage}</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Inp;
