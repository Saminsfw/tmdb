import { IconType } from "react-icons";
import { NavBarMenuType } from "../NavBarMenu/NavBarMenu.types";
export type LogoType = {
  imgSrc: string;
  url: string;
  altText: string;
};
export type HeaderType = {
  logo: LogoType;
  menu: NavBarMenuType;
  ActionIcon: IconType;
  extraClasses?: string;
};
