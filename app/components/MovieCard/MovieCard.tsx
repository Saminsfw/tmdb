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
  let cardClasses = classNames(`flex flex-col gap-1 relative shrink-0`);
  return (
    <div className={`${cardClasses} ${extraClasses}`}>
      <PopupMenu
        links={popupMenuLinks}
        extraTriggerClasses="absolute top-4 right-4"
      />
      <Link href={movieImage.url} className="inline-flex rounded-8">
        <Image
          src={movieImage.imgSrc}
          alt={movieImage.altText}
          width={176}
          height={224}
        />
      </Link>
      <RatingComponent
        value={rating}
        extraClasses="absolute bottom-[58px] left-5"
      />
      <Text text={title} variant="16" extraClasses="font-bold pt-4 pl-2" />
      <Text text={date} variant="16" extraClasses="opacity-60 pl-2" />
    </div>
  );
};

export default MovieCard;
