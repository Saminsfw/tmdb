import React from "react";
import classNames from "classnames";
import { InputType } from "./Input.types";

const Input = ({
  placeholder,
  defaultValue,
  extraClasses,
  onChange,
}: InputType) => {
  let inputClasses = classNames(
    "text-[18px] leading-[22px] placeholder:text-darkGrey text-black w-full py-4 px-6 rounded-30 outline-none"
  );
  return (
    <input
      className={`${inputClasses} ${extraClasses ?? ""}`}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
