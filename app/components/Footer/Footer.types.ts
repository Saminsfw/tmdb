import { FooterMenuType } from "../FooterMenu/FooterMenu.types";

export type FooterType = {
  logo: {
    imgSrc: string;
    url: string;
    altText: string;
  };
  menus: Array<FooterMenuType>;
  extraClasses?: string;
};
