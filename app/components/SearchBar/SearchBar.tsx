import React from "react";
import classNames from "classnames";
import { SearchBarType } from "./SearchBar.types";
import Input from "../Input/Input";
import Button from "../Button/Button";

const SearchBar = ({
  onInputChange,
  onButtonClick,
  extraClasses,
}: SearchBarType) => {
  let SearchBarClasses = classNames(
    "flex bg-white rounded-30 w-full gap-10 justify-between"
  );
  return (
    <div className={`${SearchBarClasses} ${extraClasses ?? ""}`}>
      <Input
        placeholder="Search for a movie,tv show,person......"
        onChange={onInputChange}
      />
      <Button text="Search" variant="hero-search" onClick={onButtonClick} />
    </div>
  );
};

export default SearchBar;
