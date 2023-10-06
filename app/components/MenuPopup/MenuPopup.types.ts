import { NavBarLinkType } from "../NavBarLink/NavBarLink.types";

export type MenuPopupType = {
  links: Array<NavBarLinkType>;
  extraTriggerClasses?: string;
};
