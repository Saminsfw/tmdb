import React from "react";
import classNames from "classnames";
import { ButtonType } from "./Button.types";

const Button = ({ text, variant, extraClasses, onClick }: ButtonType) => {
  let buttonClasses = classNames({
    "text-[16px] text-white font-bold leading-[20px] rounded-30 py-4 px-6 bg-gradient-to-r to-lightBlue from-lightGreen":
      variant == "hero-search",
  });
  return (
    <button
      className={`${buttonClasses} ${extraClasses ?? ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
