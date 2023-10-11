import { LinkType } from "../NavBarLink/NavBarLink.types";

export type MenuPopupType = {
  links: Array<LinkType>;
  extraTriggerClasses?: string;
};
