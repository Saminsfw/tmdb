import React from "react";
import { RatingType } from "./Rating.types";
import classNames from "classnames";
import Text from "../Text/Text";

const RatingComponent = ({ value, extraClasses }: RatingType) => {
  let percentageClass = classNames("relative text-[8px] text-white top-0");
  let ratingClasses = classNames(
    `flex justify-center items-center w-9 h-9 bg-black rounded-full ring-[3px]`,
    {
      "ring-green-600": value > 75 && value <= 100,
      "ring-yellow-500": value > 50 && value <= 75,
      "ring-red-600": value > 0 && value <= 50,
    }
  );
  return (
    <div className={`${ratingClasses} ${extraClasses}`}>
      <Text
        text={value.toString()}
        variant="12"
        extraClasses="font-semibold text-white "
      />
      <span className={percentageClass}>%</span>
    </div>
  );
};

export default RatingComponent;
