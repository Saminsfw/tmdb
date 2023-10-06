import { LogoType } from "../Header/Header.types";

export type ImageType = LogoType;
export type MovieCardType = {
  movieImage: ImageType;
  title: string;
  date: string;
  rating: number;
  extraClasses?: string;
};
