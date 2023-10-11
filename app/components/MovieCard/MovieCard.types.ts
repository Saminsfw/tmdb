import { LogoType } from "../Header/Header.types";
import { NavBarLinkType } from "../NavBarLink/NavBarLink.types";

export type ImageType = LogoType;
export type MovieCardType = {
  movieImage: ImageType;
  title: string;
  date: string;
  rating: number;
  extraClasses?: string;
  onCardClick?: React.MouseEventHandler;
  popupMenuLinks: Array<NavBarLinkType>;
};
