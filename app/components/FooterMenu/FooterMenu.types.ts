import { FooterLinkType } from "../FooterLink/FooterLink.types";

export type FooterMenuType = {
  title: string;
  links: Array<FooterLinkType>;
  extraClasses?: string;
};
