export type LinkType = {
  text: string;
  url: string;
  extraClasses?: string;
};
export type NavBarLinkType = {
  text: string;
  url: string;
  extraClasses?: string;
  sublinks?: Array<LinkType>;
};
