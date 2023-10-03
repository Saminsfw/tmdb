import { FooterMenuType } from "../FooterMenu/FooterMenu.types";
import { LogoType } from "../Header/Header.types";

export type FooterType = {
  logo: LogoType;
  menus: Array<FooterMenuType>;
  extraClasses?: string;
};
