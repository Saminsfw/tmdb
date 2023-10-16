"use client";
import React from "react";
import { MovieCardType } from "./MovieCard.types";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import Text from "../Text/Text";
import RatingComponent from "../Rating/Rating";
import PopupMenu from "../MenuPopup/MenuPopup";

const MovieCard = ({
  movieImage,
  title,
  date,
  extraClasses,
  rating,
  popupMenuLinks,
}: MovieCardType) => {
  let cardClasses = classNames(
    `flex flex-col gap-1 relative shrink-0 w-[150px] h-[380px]`
  );
  return (
    <div className={`${cardClasses} ${extraClasses}`}>
      <PopupMenu
        links={popupMenuLinks}
        extraTriggerClasses="absolute top-3 right-3"
      />
      <Link href={movieImage.url} className="inline-flex">
        <Image
          className="rounded-8"
          src={movieImage.imgSrc}
          alt={movieImage.altText}
          width={150}
          height={224}
        />
      </Link>
      <RatingComponent
        value={rating}
        extraClasses="absolute bottom-[136px] left-3"
      />
      <Link href={movieImage.url}>
        <Text
          text={title}
          variant="16"
          extraClasses="font-bold pt-6 pl-2 hover:text-lightBlue"
        />
      </Link>
      <Text text={date} variant="16" extraClasses="opacity-60 pl-2" />
    </div>
  );
};

export default MovieCard;
