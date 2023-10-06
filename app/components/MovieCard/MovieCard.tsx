"use client";
import React from "react";
import { MovieCardType } from "./MovieCard.types";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import Text from "../Text/Text";
import RatingComponent from "../Rating/Rating";
import PopupMenu from "../MenuPopup/MenuPopup";

const PopupOptions = {
  links: [
    { text: "Option 1", url: "/option1" },
    { text: "Option 2", url: "/option2" },
    { text: "Option 3", url: "/option3" },
    { text: "Option 4", url: "/option4" },
  ],
};
const MovieCard = ({
  movieImage,
  title,
  date,
  extraClasses,
  rating,
}: MovieCardType) => {
  let cardClasses = classNames(`flex flex-col gap-1 relative`);
  return (
    <div className={`${cardClasses} ${extraClasses}`}>
      <PopupMenu
        links={PopupOptions.links}
        extraTriggerClasses="absolute top-4 right-4"
      />
      <Link href={movieImage.url} className="inline-block h-56 w-38 rounded-8">
        <Image
          src={movieImage.imgSrc}
          alt={movieImage.altText}
          width={150}
          height={224}
        />
      </Link>
      <RatingComponent
        value={rating}
        extraClasses="absolute bottom-[108px] left-5"
      />
      <Text text={title} variant="16" extraClasses="font-bold pt-2 pl-2" />
      <Text text={date} variant="16" extraClasses="pb-[50px] opacity-60 pl-2" />
    </div>
  );
};

export default MovieCard;
