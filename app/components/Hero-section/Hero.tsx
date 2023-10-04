"use client";
import React from "react";
import { HeroType } from "./Hero.types";
import Image from "next/image";
import classNames from "classnames";
import SearchBar from "../SearchBar/SearchBar";
import Heading from "../Heading/Heading";

const Hero = ({ title, description, extraClasses }: HeroType) => {
  let heroClasses = classNames(
    `flex flex-col gap-1 px-10 py-[88px] bg-[url('https://loremflickr.com/1440/300/boy')] bg-cover max-w-[1300px] h-[360px]`
  );
  const handleSearchButton = () => {
    alert("Search Button Clicked");
  };
  const handleSearchInput = () => {
    alert("Search Input Changed");
  };
  return (
    <div className={`${heroClasses} ${extraClasses}`}>
      <Heading
        text={title}
        variant="48"
        extraClasses="text-white font-semibold"
      />
      <Heading
        text={description}
        variant="32"
        extraClasses="text-white font-medium pb-[50px]"
      />

      <SearchBar
        onButtonClick={handleSearchButton}
        onInputChange={handleSearchInput}
      />
    </div>
  );
};

export default Hero;
